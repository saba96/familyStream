var redis = require('redis');
var client = redis.createClient();
var express = require('express');
var router = express.Router();

const THIRTY_SECONDS_IN_MS = 30000;

/* GET images listing. */
router.get('/', function(req, res, next) {
  client.zrangebyscore('images', Date.now(), Date.now() + THIRTY_SECONDS_IN_MS, (err, images) => {
    if(err)
      console.log(err);
    else {
      console.log(images)
      res.send(images);
    }
  });
});

/* POST images */
router.post('/', function(req, res, next) {
  console.log(req.body.image);
  client.zadd('images', Date.now() + THIRTY_SECONDS_IN_MS, req.body.image);
  res.send('POST acknowledged.');
});

module.exports = router;
