var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('form', {title: "Mini Message Board"});
});

module.exports = router;
