const nodemailer = require('nodemailer');

module.exports = function() {

    const mailTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD
        }
    });

    const to = process.env.USER;

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