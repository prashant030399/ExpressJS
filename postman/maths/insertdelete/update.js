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

console.log(req.query);

var r = req.query.r;
var n = req.query.n;

con.connect(function(err){
if (err) throw err;

var sql ="update info set name=? where rno=?";

con.query(sql, [r,n], function(err, result){
if (err) throw err;
res.send(result);

});
});
});

module.exports= router;
