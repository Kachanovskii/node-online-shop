const Product = require('../model/product')


exports.getAdminPage = (req,res,next) => {
    Product.count()
    .then((quantity) => {
        res.render('pages/admin page/admin', {active: 'overview', quantity: quantity})
    })
}

exports.getAdminProducts = (req,res,next) => {
    Product.findAll()
    .then((products) => {
        res.render('pages/admin page/adminProducts.ejs', {active: 'products', products: products})
    })
}

exports.getAddProduct = (req, res, next) => {
    res.render('pages/admin page/addProduct.ejs', {active: 'add-product'})
}

exports.getProductDetail = (req, res, next) => {
    res.render('pages/admin page/productDetail.ejs', {active: 'products'})
}

exports.postAddProduct = (req, res, next) => {
    const name = req.body.name
    const price = req.body.price
    const image = req.body.image
    const description = req.body.description
    const color = req.body.color
    const category = req.body.category
    const brand = req.body.brand

   Product.create({name_prod: name, price: price, imageURL: image, description: description, color: color, category: category, brand: brand})
    .then(() => {
        res.redirect('/admin/products')
    })
}

exports.postEditProduct = (req, res, next) => {
    const id = req.body.id
    const name = req.body.name
    const price = req.body.price
    const image = req.body.image
    const description = req.body.description
    const color = req.body.color
    const category = req.body.category
    const brand = req.body.brand
    
    Product.findByPk(id)
    .then((product) => {
        product.update({name_prod: name, price: price, imageURL: image, description: description, color: color, category: category, brand: brand})
        product.save() 
    })

    Product.findAll()
    .then((product) => {
        setTimeout(() => {
            res.redirect('/admin/products')
        }, 500)    
    })
}

exports.postDeleteProduct = (req, res, next) => {
    const id = req.body.id
    console.log(id)

    Product.findByPk(id)
    .then((product) => {
        product.destroy()
    })
    
    Product.findAll()
    .then((product) => {
        setTimeout(() => {
            res.redirect('/admin/products')
        }, 500)    
    })
}