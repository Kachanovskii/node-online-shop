const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
  //db
  // User.findById(id, function(err, user) {
  //   done(err, user);
  // });
});

passport.use(new GoogleStrategy({
    clientID: "732703705112-cjahuf5rq6lfsgaid8j2anljfb463ucv.apps.googleusercontent.com",
    clientSecret: "SBnRW54o_E5PpYxSE9ydcZZQ",
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
    //db
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
  }
));
