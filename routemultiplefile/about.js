


var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('About');
});


//export this router to use in our index.js
module.exports = router;