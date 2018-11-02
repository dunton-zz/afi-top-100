const express = require('express');
// const mongoose = require('mongoose');
// const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./services/passport'); // import passport.js file, this makes it execute

const app = express();

// start of Middleware

app.use(bodyParser.json());
// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey],
//   }),
// );
app.use(passport.initialize());
app.use(passport.session());

// end of Middleware

// routes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
