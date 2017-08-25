var express = require('express');
var router = express.Router();

const projects = [{
        name: 'bs-calc',
        title: 'Bootstrap Calculator'
    },
    {
        name: 'random-quotes',
        title: 'Random Quote Machine'
    }
];

/* GET projects. */

projects.forEach(project => {
    router.get('/' + project.name, function(req, res, next) {
        res.render(`projects${project.name}`, { title: project.title });
    });
});

module.exports = router;
