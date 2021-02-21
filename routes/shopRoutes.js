const express = require('express');
const router = express.Router();
const path = require('path');

//Controllers
const {getIndexPage,getHomePage,getContactPage, getBlogPage, getCartPage, getCategoryPage, getConfirmationPage, getLoginPage, getRegisterPage, getSingleBlogPage, getSingleProductPage, getTrackingOrderPage, getCheckoutPage, getLogOut, postLoginIn, postRegister, addToCart} = require ('../controolers/shopController')

//Get page
router.get("/", getIndexPage)
router.get("/home", getHomePage)
router.get("/login", getLoginPage)
router.get("/contact", getContactPage)
router.get("/blog", getBlogPage)
router.get("/cart", getCartPage)
router.get("/category", getCategoryPage)
router.get("/confirmation", getConfirmationPage)
router.get("/register", getRegisterPage)
router.get("/single-blog", getSingleBlogPage)
router.get("/single-product/:id_prod", getSingleProductPage)
router.get("/tracking-order", getTrackingOrderPage)
router.get("/checkout", getCheckoutPage)


//Post added product to cart
router.post('/add-to-cart', addToCart)

//Post login data
router.post('/login', postLoginIn)

//Post register date
router.post('/register', postRegister)

// Get logout page
router.get('/logout', getLogOut)


module.exports = router