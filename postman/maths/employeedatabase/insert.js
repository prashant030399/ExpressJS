var express = require('express');
var mysql = require('mysql2');

var router = express.Router();

router.get('/', function(req,res){

    var con = mysql.createConnection({
host:"localhost",
user:"root",
password:"seedit",
database:"employeeprofile"

    });
console.log(req.query);
    var i =req.query.i;
    var n = req.query.n;
    var d= req.query.d;
    
    var c = req.query.c;
    var s= req.query.s;
    var e = req.query.e;

    con.connect(function(err){
if (err) throw err;

var sql = "insert into profile(ID,Name, Dept, Contactno, Salary, EmployeeRank) values(?,?,?,?,?,?)";

 con.query(sql, [i,n,d,c,s,e], function(err , result){
if (err) throw err;
res.send("Successfully Saved ");
 });

    });

});

module.exports = router ;

