var express = require('express');
var mysql = require('mysql2');

var router = express.Router();
router.get('/', function(req,res){

    var con = mysql.createConnection({
host:"localhost",
user:"root",
password:"seedit",
database:"customerprofile"

    });

    var i = req.query.i;
    var n =req.query.n;
var d= req.query.d;
var m=req.query.m;




con.connect(function(err){
if (err) throw err;

var sql ="select * from profile";


con.query(sql,[i,n,d,c,m],function(err,result){
if (err) throw err;
res.send(result);
});
});
});

module.exports=router;