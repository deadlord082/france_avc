var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/antennes', function(req, res, next) {
  res.render('antennes', { title: 'Express' });
});

router.get('/preventions', function(req, res, next) {
  res.render('preventions', { title: 'Express' });
});

router.get('/france_avc', function(req, res, next) {
  res.render('france_avc', { title: 'Express' });
});

router.get('/temoignages', function(req, res, next) {
  res.render('temoignages', { title: 'Express' });
});

router.get('/info', function(req, res, next) {
  res.render('info', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

module.exports = router;
