
var nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

module.exports = {
    sendMail: (email, participant) => {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD
            }
        });

        const handlebarOptions = {
            viewEngine: {
                partialsDir: path.resolve('./views/'),
                defaultLayout: false,
            },
            viewPath: path.resolve('./views/'),
        };

        // use a template file with nodemailer
        transporter.use('compile', hbs(handlebarOptions))
      
        let mailOptions = {
            from: process.env.MAIL_FROM_ADDRESS, // sender address
            to: email, // list of receivers
            subject: 'Vaksin Covid 19', // Subject line
            template: 'email', // the name of the template file i.e email.handlebars
            context:{
                data: participant,
            }
        };
      
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
              console.log("success");
            });
      },
  };