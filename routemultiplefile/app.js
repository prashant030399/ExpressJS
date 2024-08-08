


var express = require('express');
var app = express();

var home = require('./home.js');
var about = require('./about.js');
var contact = require('./contact.js');


app.use('/home', home);
app.use('/about', about);
app.use('/contact', contact);

app.listen(8094);

