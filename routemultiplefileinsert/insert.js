



var express = require('express');
var  mysql = require('mysql2');


var router = express.Router();

router.get('/', function(req, res){
   

var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "seedit",
   database: "nodestudent"
 });
 
 
 con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");

   var sql = "insert into info(rno, name, marks) values(104,'Priyal',89) ";

   con.query(sql, function (err, result) {
     if (err) throw err;
     res.send(JSON.stringify(result));
   });
 });
});



//export this router to use in our index.js
module.exports = router;
