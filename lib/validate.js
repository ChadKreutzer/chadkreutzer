module.exports = function(req) {
    req.checkBody('name', 'Name Required').notEmpty();
    req.sanitizeBody('name').escape();
    req.sanitizeBody('name').trim();

    req.checkBody('email', 'Email Required').notEmpty();
    req.checkBody('email', 'Must be valid Email Address').isEmail();
    req.sanitizeBody('email').normalizeEmail();

    req.checkBody('subject', 'Subject Required').notEmpty();
    req.sanitizeBody('subject').escape();
    req.sanitizeBody('subject').trim();

    req.checkBody('body', 'Message Required').notEmpty();
    req.checkBody('body', 'Message must be at least 20 characters long').isLength({ min: 20 });
    req.sanitizeBody('body').trim();

    return req.validationErrors();

};