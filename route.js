var express = require('express');
var app = express();

app.get( "/", function(req,res){
res.send("Hello");
});

app.get("/about", function(req,res){
res.send("About");
});

app.get("/login", function(req,res){
    res.send("Login");
});

app.get("/contact", function(req,res){
res.send("Contact");
});

app.listen(8090);
console.log("run at 8090");



