var request = require('request');

request.get({
    url: 'http://localhost:3001/api/v1/rooms.get',
    //form: { '_id' : 'FC77kqfNrH39wEaKG'},
    headers: { 
        'X-Auth-Token': 'uUGZ7f6Zkh-Mj4l-MLBLvFejDfE1z_f1aXi5hOHrjUG',
        'X-User-Id' : '34YYb2cqqDaFz53ib'
    },
    },

    function (e, r, body) {
        if(e) reject(e)
        console.log(body)
        //resolve(body);
    
    });