var request = require('request');
var querystring = require('querystring');
var query = querystring.stringify({
    query: '{"_id": "FC77kqfNrH39wEaKG"}'
})
var getOnline = (data) => {
    return new Promise(function(resolve, reject) {

        request({
                url: 'http://localhost:3001/api/v1/channels.online?' + query,
                headers: {
                    'X-Auth-Token': data.auth,
                    'X-User-Id': data.userId,
                    'Accepts': 'application/json',
                }
            },

            function(e, r, body) {
                if (e) reject(e)
                console.log(body)
                resolve({ online: JSON.parse(body), data: data });
                //console.log(body)
            });
    })
}



module.exports = getOnline;