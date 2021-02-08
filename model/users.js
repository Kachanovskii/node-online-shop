const pool = require('./pool')
const bcrypt = require('bcrypt')

function User() {}

User.prototype = {
    //Find user data by id or username
    find: function(user=null, callback)
    {
        //If user = number return field = id. If user = string return field = username.
        if (user) {
            console.log('Its user: '+JSON.stringify(user))
            var field = Number.isInteger(user) ? 'id' : 'user_name'
            console.log('its field: '+ field)
        }
        let sql = `SELECT * FROM users WHERE ${field} = ?`;
        
        pool.query(sql, user, function(err, result) {
            console.log('it is result: '+result)
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
        
        let sql = `INSERT INTO users (user_name, email, first_name, last_name, password) VALUES (?, ?, ?, ?, ?)`

        pool.query(sql, bind, function(err, result) {
            if(err) {
                // throw err
                console.log(err)
                callback(null)

            } else {
                callback(result.insertId)
            }
        })
    },

    login: function(user_name, password, callback) 
    {
        this.find(user_name, function(user) {
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