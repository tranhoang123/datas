var request = require('request');



req.get({
    url: 'http://localhost:3001/api/v1/channels.list',
    form: { '_id' : 'FC77kqfNrH39wEaKG'},
    headers: { 
        'X-Auth-Token': data.auth,
        'X-User-Id' : data.userId
    },
    },

    function (e, r, body) {
        if(e) reject(e)
        //console.log(body)
        resolve(body);
    
    });