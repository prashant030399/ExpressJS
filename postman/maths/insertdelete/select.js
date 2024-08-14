var express = require('express');
var mysql = require('mysql2');
var router = express.Router();

router.get('/', function(req,res){

    var con = mysql.createConnection({
host:"localhost",
user:"root",
password:"seedit",
database:"nodestudent"
    });
 
var r = req.query.r;

console.log(req.query);
con.connect(function(err){
    if (err) throw err;
    
    var sql = "select * from info where rno=? ";
    
    con.query(sql, [r] , function(err, result){
if (err) throw err;
res.send(result);
    });
});

});
module.exports = router;