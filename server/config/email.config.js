const { Nodemailer } = require("nodemailer");
const debug = require('debug')("app:nodemailer");

const emailuser = process.env.EMAILUSER || 'unishop';
const emailpass = process.env.EMAILPASS || '';

const transporter = Nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: `${emailuser}@gmail.com`,
        pass: emailpass
    }
});

module.exports = transporter;