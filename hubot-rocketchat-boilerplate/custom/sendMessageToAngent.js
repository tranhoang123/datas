var req = require('request');
var online = require('./onlineAPI');
var auth = require('./AuthAPI');
var post = require('./postMessage');
var sendMessage = (message) => {
    auth().then(data => online(data))
        .then(authData => {
            //console.log(authData.online.online);
            let online = authData.online.online;
            let data = authData.data;
            //console.log(online);
            //console.log(data);
            let angent = online.filter(e => {
                    return e.username !== "mybot" && e.username !== "tranhoang";
                })
                //console.log(angent);
            post({ angent: angent, data: data, message: message });
        })
        .catch(e => console.log(e));
}

module.exports = sendMessage;