const rcWebhook = require('rocketchat-webhook');

// var message = {
//     "text": "Example message",
//     "attachments": [
//       {
//         "title": "Rocket.Chat",
//         "title_link": "https://rocket.chat",
//         "text": "Rocket.Chat, the best open source chat",
//         "image_url": "/images/integration-attachment-example.png",
//         "color": "#764FA5"
//       }
//     ]
//   }

// rcWebhook.sendMessage('http://localhost:3001/','G4WbkmpoLFFyvEtHk/wrdoJCMhjuZwkd7uyC3EEKPvRARuNqoQEZZx8vN36fRb7iCD','a customer need your help', function(error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("no error");
//     }
// });
const curl = new (require( 'curl-request' ))();
var userid ;
var authtoken;
var db; 
function getInfo(){
        curl
        .setBody({
            "username":process.env.ROCKETCHAT_USER,
            "password":process.env.ROCKETCHAT_PASSWORD, 
        })
        .post('http://localhost:3001/api/v1/login')
        .then(({statusCode, body, headers}) => {
            //console.log(typeof(body)+"1");
            db = body.data;
            //console.log(data);
            //console.log(userid, authtoken);
        })
        .catch((e) => {
            console.log(e);
        });
    };
     async function getIdentity(){
        var body = await getInfo();
        // console.log("trong get"+body);
        //await curl.newTorIdentity();
        curl.setHeaders([
            'X-User-Id: ',
            'X-Auth-Token: ',
            'Content-Type: application/x-www-form-urlencoded; charset=utf-8'
        ])
        .get('http://localhost:3001/api/v1/channels.list')
        .then(({statusCode, body, headers}) => {
            console.log(statusCode, body, headers)
        })
        .catch((e) => {
            console.log(e);
        });
}
function prints(){
    return new Promise(function(resolve, reject){
        //var data = getInfo();
        console.log(data);
        if (db)
         return resolve(db);
        
        var error = "Loi roi";
        reject(error);
    });
}
// prints()
// .then(data =>{
//     console.log(data);
// }).catch(error =>{
//     console.log(error);
// });


// var add = (a, b, callback) => {
//     if (typeof(a) != 'number' || typeof(b) != 'number'){
//         return callback(new Error('Tham so phai co kieu number'));
//     }
//     return callback(undefined, a+b);
// }
// let h = "hoang"
// add(4,'h', (err, result)=>{
//     if(err) console.log(err);
//     else{
//         console.log(result);
//     }
// })




