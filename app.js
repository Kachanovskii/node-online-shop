const express = require('express');
const session = require('express-session')
const path = require('path')
const boodyParser = require('body-parser');
const errorController = require('./controolers/errorController');
const shopRoutes = require('./routes/shopRoutes')
const adminRoutes = require('./routes/adminRoutes')


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



app.use(express.static(path.join(__dirname, "static")));
app.use(boodyParser.urlencoded({extended: false}))
app.use(boodyParser.json());

app.use(shopRoutes)
app.use(adminRoutes)
app.use(errorController.get404);





app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
