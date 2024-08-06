var express = require('express');
var app = express();
app.get( "/", function(req,res) {
res.send("<h1> Express</h1>  <p>  Hello Prashant </p>  ");
res.end();

});

app.listen(8090);
console.log("run at 8090") ;
  