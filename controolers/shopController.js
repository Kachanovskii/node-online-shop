const express = require('express');
const router = express.Router();
const User = require('../model/users')
const user = new User()
const Product = require('../model/product')

//Message status
let messege = 'register or log in'
let statusLogin = ''
let statusRegister = ''

//Render page
exports.getIndexPage = (req,res,next) => {
    let user = req.session.user 
    Product.findAll()
    .then((products) => {
        if(user) {
            res.redirect('/home', {active: 'home', products: products, user: true})
            return
        }
        res.render('pages/index', {name: messege, active: 'home', products: products, user: false})
    })
}

const Product = require('../models/Product')

exports.getHomePage = (req,res,next) => {
    let user = req.session.user
    Product.findAll()
    .then((products) => {
        if(user) {
            res.render('pages/home', {opp: req.session.opp, name: user.user_name, active: 'home', products: products, user: true})
            return
        }
        res.redirect('/', {active: 'home', products: products, user: false})   
    })
}

exports.getContactPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/contact', {opp: req.session.opp, name: user.user_name, active: 'contact'})
        return
    }
    res.render('pages/contact', {name: messege, active: 'contact'})
}

exports.getBlogPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/blog', {opp: req.session.opp, name: user.user_name, active: 'blog'})
        return
    }
    res.render('pages/blog', {name: messege, active: 'blog'})
}

exports.getCartPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/cart', {opp: req.session.opp, name: user.user_name, active: 'shop'})
        return
    }
    res.render('pages/error', {name: messege, active: 'home'})
}

exports.addToCart = (req, res, next) => {
    let user = req.session.user
    if(user) {
        res.redirect('/cart')
        return
    }
}

exports.getCategoryPage = (req,res,next) => {
<<<<<<< HEAD
    Product.findAll()
    .then(([rows, fieldData])=> {
        console.log(rows)
    })
    res.render('pages/category', {products: products})
    return
    
    res.render('pages/category')
=======
    let user = req.session.user
    Product.findAll()
    .then((products) => {
        if(user) {
            res.render('pages/category', {opp: req.session.opp, name: user.user_name, active: 'shop', products: products})
            return
        }
      res.render('pages/category', {name: messege, active: 'shop', products: products})
    })
>>>>>>> dev
}

exports.getCheckoutPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/checkout', {opp: req.session.opp, name: user.user_name, active: 'shop'})
        return
    }
    res.render('pages/checkout', {name: messege, active: 'shop'})
}

exports.getLoginPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/login', {opp: req.session.opp, name: user.user_name, statusMessage: '', active: 'register-login'})
        return
    }
    res.render('pages/login', {name: messege, statusMessage: statusLogin, active: 'register-login'})
    statusLogin = ''
}

exports.getRegisterPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/register', {opp: req.session.opp, name: user.user_name, statusMessage: '', active: 'register-login'})
        return
    }
    res.render('pages/register', {name: messege, statusMessage: statusRegister, active: 'register-login'})
    statusRegister=''
}

exports.getSingleBlogPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/single-blog', {opp: req.session.opp, name: user.user_name, active: 'blog'})
        return
    }
    res.render('pages/single-blog', {name: messege, active: 'blog'})
}

exports.getConfirmationPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/confirmation', {opp: req.session.opp, name: user.user_name, active: 'shop'})
        return
    }
    res.render('pages/confirmation', {name: messege, active: 'shop'})
}

 exports.getSingleProductPage = (req,res,next) => {
    let user = req.session.user
    console.log(req.params.id_prod)
    Product.findByPk(req.params.id_prod)
    .then((product) => {
        if(user) {
            res.render('pages/single-product', {opp: req.session.opp, name: user.user_name, active: 'shop', product: product, user: true})
             return
         }
        res.render('pages/single-product', {name: messege, active: 'shop', product: product, user: false})
    })
     
}

exports.getTrackingOrderPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/tracking-order', {opp: req.session.opp, name: user.user_name})
        return
    }
    res.render('pages/tracking-order', {name: messege})
}

//Post data
exports.postLoginIn = (req, res, next) => { 
    user.login(req.body.user_name, req.body.password, function(result) {
        if(result) {
            req.session.user = result
            req.session.opp = 1
            res.redirect('/home')
        } else {
            statusLogin = 'Username or password icorrect !';
            res.redirect('/login')
        }
    })
}

exports.postRegister = (req, res, next) => {
    let userInput = {
        user_name: req.body.user_name,
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password
    }
    
    user.create(userInput, function(lastId, err) {
        
        if(lastId) {
            user.find(lastId, function(result) {
                req.session.user = result;
                req.session.opp = 0;
                res.redirect('/home');
                res.render('pages/home', {opp: req.session.opp, name: user.user_name})
                return
            })
        } 
        else {
            console.log('Error creating a new user...')
            statusRegister = 'An already registered user with this name or email. Try another name or email.';
            res.redirect('/register')
      }
    })
}

exports.getLogOut = (req, res, next) => {
    if(req.session.user) {
        req.session.destroy(function() {
            res.redirect('/')
        })
    }
}



   
