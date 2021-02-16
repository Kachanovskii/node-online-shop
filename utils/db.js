const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-shop', 'root', 'password123', {
    host: 'localhost',
    dialect: 'mysql'
})
sequelize.sync()
module.exports = sequelize