const { Sequelize } = require('sequelize')


const sequelize = new Sequelize('aroma-db', 'root', 'password123', {
    host: 'localhost',
    dialect: 'mysql'
})


// try {
//     await sequelize.authenticate()
//     console.log('Connection has been established succssfully.')
// } catch(error) {
//     console.log('Unable to connct to the database: ', error)
// }


module.exports = sequelize