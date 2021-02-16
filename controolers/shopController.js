const Product = require('../models/Product')


exports.getHomePage = (req,res,next) => {
    res.render('pages/index')
}
exports.getContactPage = (req,res,next) => {
    res.render('pages/contact')
}
exports.getBlogPage = (req,res,next) => {
    res.render('pages/blog')
}
exports.getCartPage = (req,res,next) => {
    res.render('pages/cart')
}
exports.getCategoryPage = (req,res,next) => {
    Product.findAll()
    .then((products)=> {
        console.log(fieldData)
    })
    res.render('pages/category')
}
exports.getCheckoutPage = (req,res,next) => {
    res.render('pages/checkout')
}
exports.getLoginPage = (req,res,next) => {
    res.render('pages/login')
}
exports.getRegisterPage = (req,res,next) => {
    res.render('pages/register')
}
exports.getSingleBlogPage = (req,res,next) => {
    res.render('pages/single-blog')
}
exports.getConfirmationPage = (req,res,next) => {
    res.render('pages/confirmation')
}
exports.getSingleProductPage = (req,res,next) => {
    res.render('pages/single-product')
}
exports.getTrackingOrderPage = (req,res,next) => {
    res.render('pages/tracking-order')
}
