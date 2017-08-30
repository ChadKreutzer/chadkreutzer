var express = require('express');
var router = express.Router();

const projects = require('../lib/projects');
const header = require('../lib/header');

const links = header('/../');

/* GET projects. */

projects.forEach(project => {
    router.get('/' + project.route, function(req, res, next) {
        res.render(project.link, { title: project.title, links });
    });
});

module.exports = router;
