const nodemailer = require('nodemailer');


module.exports = {

    // create reusable transporter object using the default SMTP transport
    transporter: nodemailer.createTransport({
        host: 'smtp.live.com',
        port: 587,
        secure: false, // secure:true for port 465, secure:false for port 587
        auth: {
            user: 'sukatesti@hotmail.com',
            pass: 'salasana123'
        }

    })
}