const express = require('express');
const router = express.Router();


const {getHomePage,getContactPage, getBlogPage, getCartPage, getCategoryPage, getConfirmationPage, getLoginPage, getRegisterPage, getSingleBlogPage, getSingleProductPage, getTrackingOrderPage, getCheckoutPage} = require ('../controolers/shopController')


router.get("/", getHomePage)
router.get("/contact", getContactPage)
router.get("/blog", getBlogPage)
router.get("/cart", getCartPage)
router.get("/category", getCategoryPage)
router.get("/confirmation", getConfirmationPage)
router.get("/login", getLoginPage)
router.get("/register", getRegisterPage)
router.get("/single-blog", getSingleBlogPage)
router.get("/single-product", getSingleProductPage)
router.get("/tracking-order", getTrackingOrderPage)
router.get("/checkout", getCheckoutPage)


module.exports = router