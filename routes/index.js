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
    req.checkBody('name', 'Invalid name').isAlpha();
    req.sanitizeBody('name').escape();

    var errors = req.getValidationResult();
    
    if (errors) {
        res.render('partials/contact_form', { title: 'Invalid Fields', errors });
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
