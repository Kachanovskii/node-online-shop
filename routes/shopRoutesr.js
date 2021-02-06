const express = require('express');
const router = express.Router();


const {getIndexPage,getHomePage,getContactPage, getBlogPage, getCartPage, getCategoryPage, getConfirmationPage, getLoginPage, getRegisterPage, getSingleBlogPage, getSingleProductPage, getTrackingOrderPage, getCheckoutPage, getLogOut, postLoginIn, postRegister, getIndexPageGA, getHomePageGA, getGoogle, getGoogleCallback, getLogOutGA} = require ('../controolers/shopController')

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
router.get("/single-product", getSingleProductPage)
router.get("/tracking-order", getTrackingOrderPage)
router.get("/checkout", getCheckoutPage)




//Post login data
router.post('/login', postLoginIn)

//Post register date
router.post('/register', postRegister)

// Get logout page
router.get('/logout', getLogOut)


module.exports = router