const pool = require('./pool')
const bcrypt = require('bcrypt')

function User() {}

User.prototype = {
    //Find user data by id or username
    find: function(user=null, callback)
    {
        //If user = number return field = id. If user = string return field = username.
        if (user) {
            var field = Number.isInteger(user) ? 'id' : 'name'
        }
        let sql = `SELECT * FROM users WHERE ${field} = ?`
        
        pool.query(sql, user, function(err, result) {
            if(err) {
                throw err;
            }
            result = result[0]
            callback(result)
        })
    },

    create : function(body, callback)
    {
        let pwd = body.password; 
        body.password = bcrypt.hashSync(pwd, 10)

        var bind = []

        for(prop in body) {
            bind.push(body[prop])
        }
        
        let sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`

        pool.query(sql, bind, function(err, lastId) {
            if(err) {
                throw err
            }
            callback(lastId)
        })
    },

    login: function(name, password, callback) 
    {
        this.find(name, function(user) {
            if(user) {
                if(bcrypt.compareSync(password, user.password)){
                    callback(user)
                    return
                }
            }
            callback(null)
        })
    }
}

module.exports = User