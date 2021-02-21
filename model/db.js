const { Sequelize } = require('sequelize')


const sequelize = new Sequelize('aroma-db', 'root', 'password123', {
    host: 'localhost',
    dialect: 'mysql'
})



module.exports = sequelize