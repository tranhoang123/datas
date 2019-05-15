
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tho97sonic@gmail.com',
    pass: 'cn09rn2c75661'
  }
});

var mailOptions = {
  from: 'tho97sonic@gmail.com',
  to: 'han97sonic@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'A customer need your help!!'
};



module.exports ={
  sendMail: ()=>{
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}