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
                html: body,
                generateTextFromHtml: true
            }, function(err) {
                if (err) console.error(`Unable to send email: ${err}`);
            });
        },

        emailError: function(message, filename, exception) {
            const body = `<h1>Chad Kreutzer Site Error</h1> message:<br><pre>${message}</pre><br>`;

            if (exception) body += `exception:<br><pre>${exception}</pre><br>`;
            if (filename) body += `filename:<br><pre>${filename}</pre><br>`;

            mailTransport.sendMail({
                from: `"Chad Kreutzer" <${to}>`,
                to: to,
                subject: 'Chad Kreutzer Site Error',
                html: body,
                generateTextFromHtml: true
            }, function(err) {
                if (err) console.error(`Unable to send email: ${err}`);
            });
        }
    };
};