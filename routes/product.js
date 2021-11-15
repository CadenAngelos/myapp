var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('productGrid', { title: 'Product Grid' });
});

router.get('/:productID', function(req, res, next) {
    res.render('productDetail', { title: 'Product Detail' });
  });
  
module.exports = router;