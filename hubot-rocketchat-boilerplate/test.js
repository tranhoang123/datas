var botdb = require('./custom/botDb');


// var bot = new botdb({
//     question: 'what\'s the weather like',
//     answer: 'I don\'t know, but you can visit https://www.accuweather.com to get information',
// }).save().then(() => console.log("da luu"))

// var message = "what time is it"
// message.trim();
// switch (message){
//     case "what time is it" :{
//         const d = new Date()
//         const t = `${d.getHours()}:${d.getMinutes()} and ${d.getSeconds()} seconds`
//         console.log(t);
//         break;
//     }
//     default : {
//         console.log("hello Hoang")
//     }
// }

// (function(){
//     botdb.find({answer : undefined }, function(err, result){
//         if(err) console.log(err);
//         if (result){
//             console.log(result);
//         }
//         else{
//             console.log('Khong tim thay ban ghi nao')
//         }
//     })
// })();

//var request = require('request');
/////////////////////////////// lenh post tin nhan len 
// req.post({
//         url: 'http://localhost:3001/api/v1/chat.postMessage',
//         form: { 'channel': 'BvCbCyu8snBZyR6JH', 'text': 'this is test' },
//         headers: {
//             'X-Auth-Token': '6cIQiF5KGyNzbk35yNmnGd4y1kjR0KrCMAul1j7OwiR',
//             'X-User-Id': '34YYb2cqqDaFz53ib'
//         },
//     },

//     function(e, r, body) {
//         console.log(body);
//     });
////////////////////////////
var online = require('./custom/onlineAPI');
var auth = require('./custom/AuthAPI');


// auth().then(data => online(data))
//     .then(data => console.log(data.online))
//     .catch(e => console.log(e));
// var sendtoAgent = () => {
// auth()
// .then(data => online(data))
// .then(data => {
//     //console.log(data.online.length);
//     let userInfo = data.online;
//     if(userInfo.length > 1){
//         let angent = userInfo.filter(e => {
//             return e.username !== "mybot";
//         })
//         console.log(angent);

//     }
//     else console.log("khong co ai online");
// })
// .catch(error => console.log(error));
// }
// sendtoAgent();
// //console.log(useronline);

// var angent = sendtoAgent()

// console.log(angent)

// curl - H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq"\ -
//     H "X-User-Id: aobEdbYhXfu5hkeqG"\ -
//     H "Content-type:application/json"\
// http: //localhost:3001/api/v1/chat.postMessage \
//     -d '{ "channel": "#general", "text": "This is a test!" }'


// var myArray = ['January', 'February', 'March'];
// var rand = myArray[Math.floor(Math.random() * myArray.length)];
// console.log(rand);

// /console.log(substr);

// var getAuth = () => {
//     return new Promise(function(resolve, reject) {
//         request.post({
//             headers: { 'content-type': 'application/json' },
//             url: 'http://localhost:3001/api/v1/login',
//             form: {
//                 username: "mybot",
//                 password: "123456"
//             },
//             method: 'POST'
//         }, function(error, response, body) {
//             if (error) reject(error);
//             body = JSON.parse(body);
//             // console.log(body.data.userId +" "+body.data.authToken)
//             //return { userId: body.data.userId, auth: body.data.authToken }
//             resolve({ userId: body.data.userId, auth: body.data.authToken });
//         });
//     })
// }

// async function run() {
//     let data;
//     try {
//         data = await getAuth();
//         console.log(data);
//     } catch (e) {
//         console.log(e);
//     }
// }

// run();

//console.log(run());


// curl -H "X-Auth-Token: N-azR65VLpbqYlh_CpdmIpiwPMEHvnp4mM7RlM5Q91s" \
//      -H "X-User-Id: 34YYb2cqqDaFz53ib" \
//      http://localhost:3001/api/v1/channels.list.joined

// curl -s -G \
//      -H "X-Auth-Token: N-azR65VLpbqYlh_CpdmIpiwPMEHvnp4mM7RlM5Q91s" \
//      -H "X-User-Id: 34YYb2cqqDaFz53ib" \
//      --data-urlencode 'query={"_id":"FC77kqfNrH39wEaKG"}' \
// http://localhost:3001/api/v1/channels.online

// var request = require('request');

// var headers = {
//     'X-Auth-Token': 'N-azR65VLpbqYlh_CpdmIpiwPMEHvnp4mM7RlM5Q91s',
//     'X-User-Id': '34YYb2cqqDaFz53ib'
// };

// var options = {
//     url: 'http://localhost:3001/api/v1/channels.online',
//     headers: headers
// };

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     }
// }

// request(options, callback);
// { _id: 'FC77kqfNrH39wEaKG' },
// var request = require('request');
// var queryString = require('querystring');
// var form = queryString.stringify({ _id: 'FC77kqfNrH39wEaKG' })
// console.log(form);
// require('request-debug')(request);

// request.get({
//         url: 'http://localhost:3001/api/v1/channels.online',
//         form: { '_id': 'FC77kqfNrH39wEaKG' },

//         headers: {
//             'X-Auth-Token': 'WgZHU_duhThUhvHLMZuqhAAlB1avstoPt2q2kBjjQPj',
//             'X-User-Id': '34YYb2cqqDaFz53ib',
//             'Accept': 'application/json',
//             'Accept-Charset': 'utf-8',
//         },
//         //method: 'GET'
//     },

//     function(e, r, body) {

//         console.log(body)

//     });


// var request = require('request');

// var headers = {
//     'X-Auth-Token': 'N-azR65VLpbqYlh_CpdmIpiwPMEHvnp4mM7RlM5Q91s',
//     'X-User-Id': '34YYb2cqqDaFz53ib'
// };

// var options = {
//     url: 'http://localhost:3001/api/v1/channels.online',
//     headers: headers,
//     body: JSON.stringify({ _id: 'FC77kqfNrH39wEaKG' }),
// };

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     }
// }

// request(options, callback);


var message = "@answer @ticket9 Co toi day ";

//let angent = res.match.message.user;
//console.log(angent);
let message = str.substr(7).trim();
let tag = str.substr(0, 7).trim();
//console.log(tag);
let answer = message.substr(8).trim();
//console.log(answer);
let tagTicket = message.substr(0, message.indexOf(" "));
let numberTicket = parseInt(tagTicket.substr(7));

console.log(message);

Hubot @answer @ticket10