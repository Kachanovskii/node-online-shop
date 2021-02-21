const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');
const path = require('path')
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




app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "static")));
app.use('/single-product/:id_p', express.static(path.join(__dirname, "static")));
app.use('/add-product', express.static(path.join(__dirname, "static")));



app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(errorController.get404);





app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
