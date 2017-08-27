const express = require('express');
const router = express.Router();
const header = require('../public/javascripts/header');
const projects = require('../public/javascripts/projects');
const credentials = require('../credentials');
const emailService = require('../public/javascripts/email')(credentials);
/* name, email, subj, body */
const links = header();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Chad Kreutzer', links, projects });
});

router.post('/', function(req, res, next) {
    req.checkBody('name', 'Name Required').notEmpty();
    req.sanitizeBody('name').escape();
    req.sanitizeBody('name').trim();
    
    req.checkBody('email', 'Must be valid Email Address').isEmail();
    req.sanitizeBody('email').normalizeEmail();

    var errors = req.validationErrors();
    
    if (errors) {
        console.log(errors);
        res.render('partials/contact', { title: 'Invalid Fields', errors });
    }
    else {
        emailService.send(
            req.body.name,
            req.body.email,
            req.body.subject,
            req.body.body
        );
        res.redirect('/');
    }

});
module.exports = router;
