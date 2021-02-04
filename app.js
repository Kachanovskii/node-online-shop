const express = require('express');
const path = require('path')
const cors = require('cors')
const boodyParser = require('body-parser');
const passport = require('passport')
const cookieSession = require('cookie-session')
const errorController = require('./controolers/errorController');
const shopRoutes = require('./routes/shopRoutesr')
require('./passport')


const app = express();
const PORT = 3000;

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(cors())
app.use(express.static(path.join(__dirname, "static")));
app.use(boodyParser.urlencoded({extended: false}))
app.use(boodyParser.json());

app.use(shopRoutes)

app.use(cookieSession({
    name: 'Vadim-session',
    keys: ['key1', 'key2']
  }))

const isLoggedIn = (req, res, next) => {
    if(req.user) {
        next()
    } else {
        res.sendStatus(401)
    }
}

app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req,res) => res.send('You are not logged in !'))
app.get('/failed', (req,res) => res.send('You faild to login in!'))
app.get('/success', isLoggedIn, (req, res) => res.send(`Welcome ${req.user.displayName} !`))
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/success');
  });
app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
}) 





app.use(errorController.get404);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
