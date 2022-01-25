var express = require('express');
var passport = require('passport');
var OpenIDConnectStrategy = require('passport-openidconnect');
var db = require('../db');


passport.use(new OpenIDConnectStrategy({
  issuer: 'https://server.example.com',
  authorizationURL: 'https://server.example.com/authorize',
  tokenURL: 'https://server.example.com/token',
  userInfoURL: 'https://server.example.com/userinfo',
  clientID: process.env['CLIENT_ID'],
  clientSecret: process.env['CLIENT_SECRET'],
  callbackURL: '/oauth2/redirect',
  scope: [ 'profile' ],
  state: true
},
function verify(issuer, profile, cb) {
  return cb(null, profile);
}));

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username, name: user.displayName });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});


var router = express.Router();

router.get('/login', passport.authenticate('openidconnect'));

router.get('/oauth2/redirect', passport.authenticate('openidconnect', {
  successReturnToOrRedirect: '/',
  failureRedirect: '/login'
}));

router.post('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
