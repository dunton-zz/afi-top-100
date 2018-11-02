// file for handling routes
const passport = require('passport');

// export routes
module.exports = (app) => {
  // dealing with auth/google route
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }),
  );
  // passport.authenticate is same but since already authenticated it brings them to user profile
  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/');
  });
};
