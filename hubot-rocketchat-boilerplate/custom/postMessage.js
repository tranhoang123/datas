var req = require('request');

var send = (data) => {

    //console.log(data);
    let angent = data.angent;
    //console.log(angent);
    let message = data.message;
    // console.log(message);
    let chooseAngent = angent[Math.floor(Math.random() * angent.length)];
    console.log(chooseAngent);
    let botData = data.data;
    let respond = "@ticket" + message.ticket + " Guest question: " + message.question;
    req.post({
            url: 'http://localhost:3001/api/v1/chat.postMessage',
            form: { 'channel': chooseAngent._id, 'text': respond },
            headers: {
                'X-Auth-Token': botData.auth,
                'X-User-Id': botData.userId
            },
        },

        function(e, r, body) {
            //console.log(body);
        });
}

module.exports = send;