var express = require('express');
var mysql = require('mysql2');

var router = express.Router();

router.get('/',function(req,res){
    var x=req.query.a;
    var y=req.query.b;

    var z=parseInt(x)+parseInt(y);
    res.send("Result is "+z);
});

module.exports = router;