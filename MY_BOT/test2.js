var curl = require('curl-request')();
require('dotenv').config();

var postLogin = (a) => {
    return new Promise(function(resolve, reject) {
        a
            .setBody({
                "username": process.env.ROCKETCHAT_USER,
                "password": process.env.ROCKETCHAT_PASSWORD,
            })
            .post('http://localhost:3001/api/v1/login')
            .then(({ statusCode, body, headers }) => {
                console.log(body.data.userId, body.data.authToken);
                resolve({ user: body.data.userId, auth: body.data.authToken });
            })
            .catch((e) => {
                reject(e);
            });
    })
}
var getChannel = (a) => {
    postLogin(a)
        .then((data) => {
            a.setHeaders([
                'X-User-Id: 34YYb2cqqDaFz53ib',
                'X-Auth-Token: WgZHU_duhThUhvHLMZuqhAAlB1avstoPt2q2kBjjQPj',
                'Content-Type: application/x-www-form-urlencoded; charset=utf-8'
            ])
            a.body({
                    _id: 'FC77kqfNrH39wEaKG',
                })
                .get('http://localhost:3001/api/v1/rooms.get')
                .then(({ statusCode, body, headers }) => {
                    //console.log(body);
                    // var roomId = body.update.map((e) => {
                    //     return { userId: e._id, name: e.fname }
                    // })
                    console.log(body);
                    // resolve(roomId);
                })
                .catch((e) => reject(e))
        })

}

getChannel(curl);
// module.exports.getChannel = getChannel; 
// module.exports.login = postLogin;