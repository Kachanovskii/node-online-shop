const pool = require('./pool')
const products = []
let prodsAll = null

class Products {

    constructor (id_p, name_p, imageURL, price, description, color, category, brand) {
        this.id = id_p
        this.name_p = name_p
        this.imageURL = imageURL
        this.price = price
        this.description = description
        this.color = color
        this.category = category
        this.brand = brand
    }

    static findAll() {
        let sql = `SELECT * FROM products`
        pool.query(sql, function(err, result) {
            prodsAll=result
        })
        return prodsAll
    }

    static findById(productID) {
        let sql = `SELECT * FROM products WHERE id_p=3`
        pool.query(sql, function(err, result) {
           console.log(result)
        })
    }

}

module.exports = Products