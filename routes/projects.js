var express = require('express');
var router = express.Router();

const projects = [{
        route: 'bs-calc',
        link: 'projects/bs-calc',
        title: 'Bootstrap Calculator'
    },
    {
        route: 'random-quotes',
        link: 'projects/random-quotes',
        title: 'Random Quote Machine'
    },
    {
        route: 'wikiview',
        link: 'projects/wikiview',
        title: 'Wikipedia Viewer'
    },
    {
        route: 'pomodoro',
        link: 'projects/pomodoro',
        title: 'Pomodoro Clock'
    },
    {
        route: 'widdle-waskles',
        link: 'projects/widdle-waskles',
        title: 'Widdle Waskles Grooming'
    }
];

const header = {
    home: '/../#home',
    about: '/../#about',
    portfolio: '/../#portfolio',
    contact: '/../#contact'
};
/* GET projects. */

projects.forEach(project => {
    router.get('/' + project.route, function(req, res, next) {
        res.render(project.link, { title: project.title, header });
    });
});

module.exports = router;
