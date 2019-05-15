var request = require('request');
var querystring = require('querystring');
require('request-debug')(request);
var query = querystring.stringify({
    query: '{"_id": "FC77kqfNrH39wEaKG"}'
})
var headers = {
    'X-Auth-Token': 'Qv5vMPB_6aMCSv5ayQAbQCXkSsBzra_K6BbAqc7S0Fr',
    'X-User-Id': '34YYb2cqqDaFz53ib',
    'Accepts': 'application/json',
    //'content-type': ''
};

var options = {
    url: 'http://localhost:3001/api/v1/channels.online?' + query,
    headers: headers,
    // /body: query
};

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     }
// }

// request(options, callback);
request(options,

    function(e, r, body) {
        if (e) reject(e)
        console.log(body)
            //resolve({ online: JSON.parse(body), data: data });
            //console.log(body)
    });