app.get('/', (req,res) => res.send('You are not logged in !'))
app.get('/failed', (req,res) => res.send('You faild to login in!'))
app.get('/success', isLoggedIn, (req, res) => res.send(`Welcome ${req.user.displayName} !`))
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/success');
  });
app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
}) 

exports.getNotLogged = (req,res,next) => {
    res.send('pages/category')
}