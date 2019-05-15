var request = require('request');
require('dotenv').config();
// console.log(process.env.ROCKETCHAT.PASSWORD);
var getAuth = () => {
    return new Promise(function(resolve, reject) {
        request.post({
            headers: { 'content-type': 'application/json' },
            url: 'http://localhost:3001/api/v1/login',
            form: {
                username: "mybot",
                password: "123456"
            },
            method: 'POST'
        }, function(error, response, body) {
            if (error) reject(error);
            body = JSON.parse(body);
            console.log("userId la: " + body.data.userId + " " + "token la " + body.data.authToken)
            resolve({ userId: body.data.userId, auth: body.data.authToken });
        });
    })
}


// getAuth().then((data) => {
//     console.log(data.userId, data.auth)
// }).catch(e => console.log(e))


module.exports = getAuth;