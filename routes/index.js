var express = require('express');
var router = express.Router();
var marked = require("marked");
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {

    fs.readFile(__dirname + '/mdtest.md', function(err, contents) {
        if (err) {
            return console.log(err);
        }
        res.send(marked(contents.toString()));
    });
});

module.exports = router;
