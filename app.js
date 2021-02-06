const express = require('express');
const session = require('express-session')
const cookieSession = require('cookie-session')
const path = require('path')
const cors = require('cors')
const boodyParser = require('body-parser');
const passport = require('passport')
const errorController = require('./controolers/errorController');
const shopRoutes = require('./routes/shopRoutesr')
const googleOuth = require('./routes/googleOuth')
require('./passport')


const app = express();
const PORT = 3000;

app.set('view engine', 'ejs')
app.set('views', 'views')

//session
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 1000 * 30
  }
}))



app.use(cors())
app.use(express.static(path.join(__dirname, "static")));
app.use(boodyParser.urlencoded({extended: false}))
app.use(boodyParser.json());

app.use(shopRoutes)

//googleOuth
// app.use(cookieSession({
//   name: 'Vadim-session',
//   keys: ['key1', 'key2']
// }))
app.use(passport.initialize());
app.use(passport.session());
app.use(googleOuth)


app.use(errorController.get404);



app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
