var express = require('express');
var router = express.Router();

const projects = require('../public/javascripts/projects');
const header = require('../public/javascripts/header');

const links = header('/../');

/* GET projects. */

projects.forEach(project => {
    router.get('/' + project.route, function(req, res, next) {
        res.render(project.link, { title: project.title, links });
    });
});

module.exports = router;
