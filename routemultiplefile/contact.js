var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('Contact');
});


//export this router to use in our index.js
module.exports = router;