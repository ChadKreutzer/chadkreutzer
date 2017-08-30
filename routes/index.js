const express = require('express');
const router = express.Router();
const header = require('../lib/header');
const projects = require('../lib/projects');
const credentials = require('../credentials');
const validate = require('../lib/validate');
const emailService = require('../lib/email')(credentials);
/* name, email, subj, body */
const links = header();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Chad Kreutzer', links, projects });
});

router.post('/', function(req, res, next) {
    
    console.log(req.body);

    let errors = validate(req);

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
