var express  = require('express');
var mysql = require('mysql2');
var router = express.Router();

router.get('/', function(req,res){

    var con = mysql.createConnection({

        host:"localhost",
        user:"root",
        password:"seedit",
        database:"nosamebillid"

    });

    var bi = req.query.bi;
    var n = req.query.n;
    var p = req.query.p;
    var c = req.query.c;

    con.connect(function(err){
if (err) throw err;

var sql = "select * from info where id=?";

con.query(sql,[bi],function(err,result){
if (err) throw err;
if(result.length==0)
{

var insertsql = "insert into info(id,name,problem,contactno) values(?,?,?,?)";

con.query(insertsql, [bi,n,p,c], function(err, insertResult){
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