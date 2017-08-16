
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = {
    "isSuccess": true,
    "data":[
        {
            "name": "shaoXia",
            "age":18
        }
    ]
  };

  res.res.send(JSON.stringify(data));
});


module.exports = router;
