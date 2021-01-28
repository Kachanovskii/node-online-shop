const express = require('express');


const shopRoutes = require('./routes/shopRoutesr')

const PORT = 3000;
const app = express();

app.use(shopRoutes)


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
