const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bot', { useNewUrlParser: true });
var botdbSchema = mongoose.Schema({
    roomID: String,
    answer: String,
    question: String,
    ticket: Number,
    state: String,
    angentIssue: String,
    token: String,
})
var botdb = mongoose.model('botdb', botdbSchema);

module.exports = botdb;