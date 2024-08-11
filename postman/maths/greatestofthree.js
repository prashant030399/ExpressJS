var express = require('express');


var router = express.Router();

router.get('/',function(req,res){
    var x=parseInt(req.query.a);
    var y=parseInt(req.query.b);
    var z=parseInt(req.query.c);

    if(x > y && x > z){
        res.send(x +" is greatest ");
    }
    else if(y > x && y > z){
        res.send(y +" is greatest");
    }
    else
    {
        res.send(z + " is greatest");
    }


}); 

module.exports = router;




