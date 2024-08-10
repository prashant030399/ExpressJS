


var express = require('express');
var app =  express();


var add = require('./add.js');



var factorial = require('./factorial.js');

var greatestofthree = require('./greatestofthree.js');




app.use('/add', add);


app.use('/factorial', factorial);

app.use('/greatestofthree', greatestofthree);


app.listen(8090);