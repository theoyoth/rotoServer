const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()

module.exports.kirimEmail = (dataEmail) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    requireTLS: true,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_EMAIL_PASSWORD,
    },
  })
  return transporter
    .sendMail(dataEmail)
    .then((info) => console.log('Email terkirim'))
    .catch((err) => console.log('Terjadi kesalahan:' + err))
}
