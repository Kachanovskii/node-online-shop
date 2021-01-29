const express = require('express');
const path = require('path')

const shopRoutes = require('./routes/shopRoutesr')


const PORT = 3000;
const app = express();
app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(express.static(path.join(__dirname, "static")));
app.use(shopRoutes)


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
