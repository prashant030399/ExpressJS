var express = require('express');
var app = express();

var insert = require('./insert.js');

app.use('/insert', insert);
app.listen(8099);


