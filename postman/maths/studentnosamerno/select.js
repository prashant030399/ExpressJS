var express  = require('express');
var mysql = require('mysql2');
var router = express.Router();

router.get('/', function(req,res){

    var con = mysql.createConnection({

        host:"localhost",
        user:"root",
        password:"seedit",
        database:"nosamerno"

    });

var r =req.query.r;
var n =req.query.n;
var m =req.query.m;

    con.connect(function(err){
if (err) throw err;

var sql = "select * from info where rno=?";

con.query(sql,[r],function(err,result){
if (err) throw err;
if(result.length==0)
{

var insertsql = "insert into info(rno,name,marks) values(?,?,?)";

con.query(insertsql, [r,n,m], function(err, insertResult){
    if (err) throw err;
    res.send("Saved succesfully"); 


});

}   
else{
res.send("Avail");
}


});

    });

});

module.exports = router