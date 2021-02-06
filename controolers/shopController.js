
const express = require('express');
const router = express.Router();
const passport = require('passport')
require('../passport')
const User = require('../model/users')
const user = new User()

let messege = 'register or log in'
let statusLogin = ''


exports.getIndexPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.redirect('/home')
        return
    }
    res.render('pages/index', {name: messege})
}
exports.getHomePage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/home', {opp: req.session.opp, name: user.name})
        return
    }
    res.redirect('/')   
}
exports.getContactPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/contact', {opp: req.session.opp, name: user.name})
        return
    }
    res.render('pages/contact', {name: messege})
}

exports.getBlogPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/blog', {opp: req.session.opp, name: user.name})
        return
    }
    res.render('pages/blog', {name: messege})
}
exports.getCartPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/cart', {opp: req.session.opp, name: user.name})
        return
    }
   res.render('pages/cart', {name: messege})
}
exports.getCategoryPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/category', {opp: req.session.opp, name: user.name})
        return
    }
  res.render('pages/category', {name: messege})
}
exports.getCheckoutPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/checkout', {opp: req.session.opp, name: user.name})
        return
    }
    res.render('pages/checkout', {name: messege})
}
exports.getLoginPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/login', {opp: req.session.opp, name: user.name, statusMessage: ''})
        return
    }
    res.render('pages/login', {name: messege, statusMessage: statusLogin})
    statusLogin = ''
}
exports.getRegisterPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/register', {opp: req.session.opp, name: user.name})
        return
    }
    res.render('pages/register', {name: messege})
}
exports.getSingleBlogPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/single-blog', {opp: req.session.opp, name: user.name})
        return
    }
    res.render('pages/single-blog', {name: messege})
}
exports.getConfirmationPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/confirmation', {opp: req.session.opp, name: user.name})
        return
    }
    res.render('pages/confirmation', {name: messege})
}
exports.getSingleProductPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/single-product', {opp: req.session.opp, name: user.name})
        return
    }
    res.render('pages/single-product', {name: messege})
}
exports.getTrackingOrderPage = (req,res,next) => {
    let user = req.session.user
    if(user) {
        res.render('pages/tracking-order', {opp: req.session.opp, name: user.name})
        return
    }
    res.render('pages/tracking-order', {name: messege})
}

exports.postLoginIn = (req, res, next) => {
    user.login(req.body.name, req.body.password, function(result) {
        if(result) {
            req.session.user = result
            req.session.opp = 1
            res.redirect('/')
        } else {

            statusLogin = 'Username or password icorrect !';
            res.redirect('/login')
        }
    })
}


exports.postRegister = (req, res, next) => {
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
        } else {
            console.log('Error creating a new user...')
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



   
