var express = require('express');
var router = express.Router();

/*/!* GET home page. *!/
router.get('/', function(req, res, next) {
  res.render('index');
});

/!* GET video example page. async solution. *!/
router.geder('snippet-solution');
});

/!* GET video example page with snippet. *!/
router.get('/index-with-snippet-solution', function(req, res, next) {
  res.render('index-with-snippet-solution');
});

/!* GET video example page with snippet. *!/
router.get('/index-with-async-video', function(req, res, next) {
  res.render('index-with-async-video');
});

/!* GET original index *!/
router.get('/index-original', function(req, res, next) {
  res.render('index-original');
});

/!* GET original vied page index *!/
router.get('/video-page-with-original-player', function(req, res, next) {
  res.render('video-example-origin');
});

/!* GET with snippet page index *!/
router.get('/index-with-spinner-video', function(req, res, next) {
  res.render('index-with-spinner-video');
});

/!* GET with snippet page index *!/
router.get('/index-with-snippet-spinner-solution', function(req, res, next) {
  res.render('index-with-snippet-spinner-solution');
});

/!* GET with snippet page index *!/
router.get('/snippet-spinner-solution', function(req, res, next) {
  res.render('snippet-spinner-solution.ejs');
});

// test ADS parsing

router.get('/test-with-no-ads', function(req, res, next) {
  res.render('test-with-no-ads');
});

router.get('/test-with-overriden-vast', function(req, res, next) {
  res.render('test-with-overriden-vast');
});

router.get('/test-with-own-ads', function(req, res, next) {
  res.render('test-with-own-ads');
});t('/video-example-async-solution', function(req, res, next) {
  res.render('video-example');
});

/!* GET video example page with snippet. *!/
router.get('/video-example-snippet-solution', function(req, res, next) {
  res.render('snippet-solution');
});

/!* GET video example page with snippet. *!/
router.get('/index-with-snippet-solution', function(req, res, next) {
  res.render('index-with-snippet-solution');
});

/!* GET video example page with snippet. *!/
router.get('/index-with-async-video', function(req, res, next) {
  res.render('index-with-async-video');
});

/!* GET original index *!/
router.get('/index-original', function(req, res, next) {
  res.render('index-original');
});

/!* GET original vied page index *!/
router.get('/video-page-with-original-player', function(req, res, next) {
  res.render('video-example-origin');
});

/!* GET with snippet page index *!/
router.get('/index-with-spinner-video', function(req, res, next) {
  res.render('index-with-spinner-video');
});

/!* GET with snippet page index *!/
router.get('/index-with-snippet-spinner-solution', function(req, res, next) {
  res.render('index-with-snippet-spinner-solution');
});

/!* GET with snippet page index *!/
router.get('/snippet-spinner-solution', function(req, res, next) {
  res.render('snippet-spinner-solution.ejs');
});

// test ADS parsing

router.get('/test-with-no-ads', function(req, res, next) {
  res.render('test-with-no-ads');
});

router.get('/test-with-overriden-vast', function(req, res, next) {
  res.render('test-with-overriden-vast');
});

router.get('/test-with-own-ads', function(req, res, next) {
  res.render('test-with-own-ads');
});*/

// Action with adBlock

router.get('/adblock-action-not-play-video', function(req, res, next) {
  res.render('work_fine');
});

router.get('/adblock-action-ask-for-turn-off', function(req, res, next) {
  res.render('work_fine_2');
});

module.exports = router;
