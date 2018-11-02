// file for passport js use
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js'); // get api keys

const User = mongoose.model('users'); // 1 arg means fetch, 2 args mean load into

passport.serializeUser((user, done) => {
  done(null, user.id); // refers to mongo identifier (shortcut to user._id.oid)
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      // this is where we save user info
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // we already have a user with this id
        done(null, existingUser);
      } else {
        // we dont have a user record with this id
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
    },
  ),
);
