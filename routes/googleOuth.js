const express = require('express');
const router = express.Router();
const passport = require('passport')
require('../passport')

    
const isLoggedIn = (req, res, next) => {
    if(req.user) {
        next()
    } else {
        res.sendStatus(401)
    }
  }
    router.get('/', (req,res) => res.send('You are not logged in !'))
    router.get('/failed', (req,res) => res.send('You faild to login in!'))
    router.get('/success', isLoggedIn, (req, res) => res.send(`Welcome ${req.user.displayName} !`))
    router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
    
    router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/success');
      });
    router.get('/logout', (req, res) => {
        req.session = null;
        req.logout();
        res.redirect('/');
    }) 

    module.exports = router


