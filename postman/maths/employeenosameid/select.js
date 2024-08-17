var express  = require('express');
var mysql = require('mysql2');
var router = express.Router();

router.get('/', function(req,res){

    var con = mysql.createConnection({

        host:"localhost",
        user:"root",
        password:"seedit",
        database:"nosameid"

    });

var i =req.query.i;
var n =req.query.n;
var r =req.query.r;

    con.connect(function(err){
if (err) throw err;

var sql = "select * from info where id=?";

con.query(sql,[i],function(err,result){
if (err) throw err;
if(result.length==0)
{

var insertsql = "insert into info(id,name,rankk) values(?,?,?)";

con.query(insertsql, [i,n,r], function(err, insertResult){
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