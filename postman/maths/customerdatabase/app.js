var express = require('express');
var app = express();

var insert = require('./insert.js');
var select = require('./select.js');

                
app.use('/insert',insert);              
app.use('/select',select);


app.listen(8090); 

