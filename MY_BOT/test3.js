var curl = require('curl-request')();

//var info = require('./test2').getChannel(curl);
var user = require('./test2').login(curl);
var getuser =  (done) => {
    user
    .then((data) => {
        done(undefined,data)
    })
    .catch(e => done(new Error("co loi xay ra")))
}

// getuser(function(err, data){
//     if(err) return err;
//     return data
// });

module.exports.getuser = getuser;

