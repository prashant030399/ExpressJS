var express = require('express');
var app = express();

var insert = require("./insert.js");
var delete1 = require('./delete1.js');
var select = require('./select.js');
var update = require('./update.js');

app.use('/insert', insert);
app.use('/delete1',delete1);
app.use('/select',select);
app.use('/update', update);

app.listen(8099);


