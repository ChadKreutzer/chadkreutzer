const nodemailer = require('nodemailer');

module.exports = function(credentials) {

    const mailTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: credentials.gmail.user,
            pass: credentials.gmail.password
        }
    });

    const to = credentials.gmail.user;

    return {
        send: function(name, email, subj, body) {
            const from = `"${name}" <${email}>`;
            mailTransport.sendMail({
                from: from,
                to: to,
                subject: subj,
                html: `email: ${email} ${body}`,
                generateTextFromHtml: true
            }, function(err) {
                if (err) console.error(`Unable to send email: ${err}`);
            });
        }
    };
};