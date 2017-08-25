var express = require('express');
var router = express.Router();

const header = {
    home: '#home',
    about: '#about',
    portfolio: '#portfolio',
    contact: '#contact'
};

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Chad Kreutzer', header });
});

module.exports = router;
