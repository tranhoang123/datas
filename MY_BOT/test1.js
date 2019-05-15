
const curl = new (require( 'curl-request' ))();
var websocket = require('ws');
var botInfo = require('./test3');
const rcWebhook = require('rocketchat-webhook');

var pushNotification = (text) =>{
    rcWebhook.sendMessage('http://localhost:3001/','85Kqf6ePeGrGAHN7z/Z7WBuGj9G46Y6b4cWKcnGesWhStseiDNrLzJujxnTxqXsKJ4','A customer have a question: '+text, function(error){
        if(error){
            console.log(error);
        }else{
            console.log("no error");
        }
    });
}
var user;
var auth;
getuser = botInfo.getuser(function(err, data){
    if(err) return err;
    user = data.user;
    auth =  data.auth;
})
if(user && auth) console.log(user+ auth);
const wss = new websocket('ws://localhost:3001/websocket');


var connectRequest = {
    "msg": "connect",
    "version" : "1",
    "support":["1", "pre2", "pre1"]
}

wss.onopen = function() {
    console.log('open')
    wss.send(JSON.stringify(connectRequest));
    
}

wss.onmessage = function(ev) {
    let _data = JSON.parse(ev.data);

    //console.log(_data);
    switch (_data.msg){
    case "ping" : {
        console.log("ping");
        wss.send(JSON.stringify({
            "msg": 'ping'
        }));
        break;
    }
    case "connected" : {
        console.log("connected");
        wss.send(JSON.stringify({
            "msg": "method",
            "method": "login",
            "id":"42",
            "params":[
                {
                    "user": { "username": "mybot" },
                    "password": "12345678",
                }
            ]
        }))
        break;
    }
    case "added" : {
        console.log(_data);
        // wss.send(JSON.stringify({
        //     "msg": "method",
        //     "method": "rooms/get",
        //     "id": "42",
        //     "params": [ { "$date": 1580377601 } ]
        // }))
        var param = _data.id+"/notification";
        wss.send(JSON.stringify({
            "msg":  "sub",
            "id": "43/message",
            "name": "stream-notify-user",
            "params":[
                param,
                false
            ]
        }))
        
        break;
    }
    case "ready": {
        console.log("da subcribe");
        //console.log(_data.fields);
        break;
    }
    case "changed":{
        console.log(_data.fields);
        pushNotification(_data.fields.args[0].text);
        break;
    }
    case "result" :{
        //console.log("result");
    }
    default :{
        console.log(_data);
        }
    }
}

