const nodemailer = require('nodemailer'); //https://nodemailer.com/about/

const sendEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'dahlia.schuppe66@ethereal.email',
      pass: '8DPxTwjdthwZb1bjKk',
    },
  });

  const info = await transporter.sendMail({
    from: '"Hania Salman "hania.salman99@gmail.com', // sender address
    to: 'myfriend@gmail.com', // list of receivers
    subject: 'Send Emails using Node.js', // Subject line
    text: 'Hello My Friend', // plain text body
    html: '<b>Hello Friend. How are you</b>', // html body
  });

  console.log('Message sent: %s', info.messageId);
  res.json(info);
};

module.exports = sendEmail;
