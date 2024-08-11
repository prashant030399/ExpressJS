var express = require('express');

var mysql = require('mysql2');

var router = express.Router();

router.get('/',function(req,res){
    var x=parseInt(req.query.x);
var f=1;
for(var i=x; i>=1 ; i--){
f= f*i;
}
    res.send("Factorial of "+ x+ " is "+f)                                  ;
}); 

module.exports = router;
