const RealTimeAPI = require('rocket.chat.realtime.api.rxjs');
const realTimeAPI =  new RealTimeAPI("wss://demo.rocket.chat/websocket");
// Provide, URL to the Rocket.Chat's Realtime API.

realTimeAPI.keepAlive().subscribe();
// Responds "pong" to the "ping" message sent by the Realtime API. To keep the connection alive.
const USERNAME = "mybot";
const PASSWORD = "12345678";
const auth = realTimeApi.login(USERNAME, PASSWORD);
// Creating Observable

//Now subscribing the observable

    auth.subscribe(
    (data) => console.log(data),
    (err) => console.log(err),
    () => console.log('completed'));

// Use any of the methods implmented in the package.