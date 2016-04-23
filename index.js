var express = require('express');
var app = express();
require('dotenv').config();
// var google = require('googleapis');
// var gmail = google.gmail('v1');
// var passport = require('passport');
// var google = require('passport-google-oauth');

app.use(express.static('public'));

// app.get('/auth/google', function(request, response, next) {
//   passport.authenticate('google', {scope: ['profile', 'email']})(request, response, next);
// });

app.get('/', function (req, res) {
  // res.send('Hello World!');
});

app.listen(3000, function () {
  // console.log(process.env.HOME)
});
