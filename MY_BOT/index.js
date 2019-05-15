const bot = require('bbot')

/** Add your bot logic here. Removing the imported examples. */
require('./test4')
// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'tho97sonic@gmail.com',
//     pass: 'cn09rn2c75661'
//   }
// });

// var mailOptions = {
//   from: 'tho97sonic@gmail.com',
//   to: 'han97sonic@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'A customer need your help!!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

bot.start()
