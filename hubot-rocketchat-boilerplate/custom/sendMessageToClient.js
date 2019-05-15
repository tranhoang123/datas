var auth = require('./AuthAPI');
var request = require('request')
var sendMessage = (message) => {
    let respond = "Answer for the question: \'" + message.question + " \': " + message.answer;
    auth().then(data => {
        request.post({
                url: 'http://localhost:3001/api/v1/chat.postMessage',
                form: { 'channel': message.roomID, 'text': respond },
                headers: {
                    'X-Auth-Token': data.auth,
                    'X-User-Id': data.userId
                },
            },
            function(e, r, body) {
                console.log(body);
            });
    })
}

module.exports = sendMessage;