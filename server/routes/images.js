var express = require('express');
var router = express.Router();

/* GET images listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST images */
router.post('/', function(req, res, next) {
  res.send('POST acknowledged.');
});

module.exports = router;
