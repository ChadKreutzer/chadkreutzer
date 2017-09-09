const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');
const header = require('../lib/header');
const projects = require('../lib/projects');
const credentials = require('../credentials');
const emailService = require('../lib/email')(credentials);

const links = header();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Chad Kreutzer',
        links,
        projects
    });
});

/* POST email */
router.post('/', [
    check('name', 'Name Required')
    .exists(),
    check('email')
    .exists().withMessage('Email Required')
    .isEmail().withMessage('Must be valid email address'),
    check('subject', 'Subject Required')
    .exists(),
    check('body')
    .exists().withMessage('Message Required')
    .isLength({ min: 20 }).withMessage('Message must be at least 20 characters long')
], function(req, res, next) {
    try {
        validationResult(req).throw();

        req.sanitizeBody('name').escape();
        req.sanitizeBody('name').trim();
        req.sanitizeBody('subject').escape();
        req.sanitizeBody('subject').trim();
        req.sanitizeBody('email').normalizeEmail();
        req.sanitizeBody('body').trim();

        const message = matchedData(req);
        // emailService.send(
        //     message.name,
        //     message.email,
        //     message.subject,
        //     message.body
        // );
        
        req.session.flash = {
            type: 'thanks',
            intro: 'Message Sent',
            message: `Thank you for sending me a message, ${message.name}`
        };
        res.render('index', {
            title: 'Chad Kreutzer',
            anchor: 'contact',
            links,
            projects
        });
    }
    catch (err) {
        const errors = err.mapped();
        const values = req.body;
        res.render('index', {
            title: 'Chad Kreutzer',
            anchor: 'contact',
            links,
            projects,
            errors,
            values
        });
    }
});

module.exports = router;
