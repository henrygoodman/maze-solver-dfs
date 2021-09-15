var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/maze', function(req, res) {
  res.render('maze', {w: req.body.width, h: req.body.height});
});

module.exports = router;
