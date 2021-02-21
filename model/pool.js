const util = require('util')
const mysql = require('mysql2')

//Connection to the data base.
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'aroma1'
})

pool.getConnection((err, connection) => {
    if(err) {
        console.log('Something went wrong connection to the data base ... ')
        console.log(err)
    }
    if(connection) {
        connection.release()
    }
    return
})



pool.query = util.promisify(pool.query)

module.exports = pool