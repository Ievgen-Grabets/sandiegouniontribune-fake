var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET video example page. async solution. */
router.get('/video-example-async-solution', function(req, res, next) {
  res.render('video-example.ejs');
});

/* GET video example page with snippet. */
router.get('/video-example-snippet-solution', function(req, res, next) {
  res.render('snippet-solution.ejs');
});

module.exports = router;
