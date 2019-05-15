var request = require("request");

var options = {
    method: 'GET',
    url: 'http://localhost:3001/api/v1/channels.online',
    headers: {
        'Postman-Token': 'b6f7793b-e2bd-45a7-867a-713f29f5a676',
        'cache-control': 'no-cache',
        Accepts: 'application/json',
        'X-User-Id': '34YYb2cqqDaFz53ib',
        'X-Auth-Token': 'ntgmbNoyXnWXI4nMJNsryWDDECFfs0yBHw0Q3ZY0GZs'
    },
    form: { query: '{"_id": "FC77kqfNrH39wEaKG"}', undefined: undefined }
};

request(options, function(error, response, body) {
    if (error) throw new Error(error);
    console.log(response.body)
    console.log(body);
});