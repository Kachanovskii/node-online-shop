const express = require('express');
const User = require('../model/users')
const router = express.Router();
const passport = require('passport')
require('../passport')
const user = new User()
let messege = 'register or log in'
let statusLogin = ''
const app = express()





const {getHomePage,getContactPage, getBlogPage, getCartPage, getCategoryPage, getConfirmationPage, getLoginPage, getRegisterPage, getSingleBlogPage, getSingleProductPage, getTrackingOrderPage, getCheckoutPage} = require ('../controolers/shopController')

//Get page
router.get("/", (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.redirect('/home')
        return
    }
   
    console.log(req.session)
    res.render('pages/index', {name: messege})
})
router.get("/home", (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/home', {opp: req.session.opp, name: user.name})
        return
    }
    res.redirect('/')
})

router.get("/login", (req,res,next) => {

    let user = req.session.user
    if(user) {
        res.render('pages/login', {opp: req.session.opp, name: user.name, statusMessage: ''})
        return
    }
    res.render('pages/login', {name: messege, statusMessage: statusLogin})
    statusLogin = ''
})
router.get("/contact", (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/contact', {opp: req.session.opp, name: user.name})
        return
    }
    res.render('pages/contact', {name: messege})
})
router.get("/blog", (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/blog', {opp: req.session.opp, name: user.name})
        return
    }
    res.render('pages/blog', {name: messege})
})
router.get("/cart", (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/cart', {opp: req.session.opp, name: user.name})
        return
    }
   res.render('pages/cart', {name: messege})
})
router.get("/category", (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/category', {opp: req.session.opp, name: user.name})
        return
    }
  res.render('pages/category', {name: messege})
})
router.get("/confirmation", (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/confirmation', {opp: req.session.opp, name: user.name})
        return
    }
    res.render('pages/confirmation', {name: messege})
})
router.get("/register", (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/register', {opp: req.session.opp, name: user.name})
        return
    }
    res.render('pages/register', {name: messege})
})
router.get("/single-blog", (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/single-blog', {opp: req.session.opp, name: user.name})
        return
    }
    res.render('pages/single-blog', {name: messege})
})
router.get("/single-product", (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages//single-product', {opp: req.session.opp, name: user.name})
        return
    }
    res.render('pages/single-product', {name: messege})
})
router.get("/tracking-order", (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/tracking-order', {opp: req.session.opp, name: user.name})
        return
    }
    res.render('pages/tracking-order', {name: messege})
})
router.get("/checkout", (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/checkout', {opp: req.session.opp, name: user.name})
        return
    }
    res.render('pages/checkout', {name: messege})
})
// router.get("/contact", getContactPage)
// router.get("/blog", getBlogPage)
// router.get("/cart", getCartPage)
// router.get("/category", getCategoryPage)
// router.get("/confirmation", getConfirmationPage)
// router.get("/login", getLoginPage)
// router.get("/register", getRegisterPage)
// router.get("/single-blog", getSingleBlogPage)
// router.get("/single-product", getSingleProductPage)
// router.get("/tracking-order", getTrackingOrderPage)
// router.get("/checkout", getCheckoutPage)


//Post login data
router.post('/login', (req, res, next) => {
    user.login(req.body.name, req.body.password, function(result) {
        if(result) {
            req.session.user = result
            req.session.opp = 1
            res.redirect('/')
        } else {

            statusLogin = 'Username or password icorrect !';
            // console.log('Username or password icorrect !')
            res.redirect('/login')
        }
    })
})

//Post register date
router.post('/register', (req, res, next) => {
    let userInput = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    
    user.create(userInput, function(lastId) {
        if(lastId) {
            user.find(lastId, function(result) {
                req.session.user = result;
                req.session.opp = 0;
                res.redirect('/');
            })
            // res.send(`Welcome ${userInput.name}`)
        } else {
            console.log('Error creating a new user...')
        }
    })
})

// Get logout page
router.get('/logout', (req, res, next) => {
    if(req.session.user) {
        req.session.destroy(function() {
            res.redirect('/')
        })
    }
})


module.exports = router