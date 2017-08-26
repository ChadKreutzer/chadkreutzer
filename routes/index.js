const express = require('express');
const router = express.Router();
const header = require('../public/javascripts/header');
const projects = require('../public/javascripts/projects');

const links = header();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Chad Kreutzer', links, projects });
});

module.exports = router;
