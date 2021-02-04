const express = require('express');
const path = require('path')
const cors = require('cors')
const boodyParser = require('body-parser');
const passport = require('passport')
const mysql = require('mysql')
const cookieSession = require('cookie-session')
const errorController = require('./controolers/errorController');
const shopRoutes = require('./routes/shopRoutesr')
const googleOuth = require('./routes/googleOuth')
require('./passport')


const app = express();
const PORT = 3000;

app.set('view engine', 'ejs')
app.set('views', 'views')

//db
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password123',
  database: 'aroma1'
})

db.connect((error) => {
  if(error) {
    console.log(error)
  } else {
    console.log('Mysql connected.')
  }
})

app.use(cors())
app.use(express.static(path.join(__dirname, "static")));
app.use(boodyParser.urlencoded({extended: false}))
app.use(boodyParser.json());

app.use(shopRoutes)

//googleOuth
app.use(cookieSession({
  name: 'Vadim-session',
  keys: ['key1', 'key2']
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(googleOuth)


app.use(errorController.get404);



app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
