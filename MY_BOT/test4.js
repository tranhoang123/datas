const bot = require('bbot');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
var botdbSchema = mongoose.Schema({
    answer: String,
    question: String
})
var botdb = mongoose.model('botdb', botdbSchema);

// bot.global.text(/\bhello\b/, (b) => b.respond('Hello!'))


bot.global.text({
    contains: [ 'hi', 'Hello' ]
  }, (b) => b.respondVia('react', ':wave:'), {
    id: 'hello-react'
  })
  
  // Add another emoji to reaction when text contains "baby"
  bot.global.text({
    contains: 'baby'
  }, (b) => b.respondVia('react', ':baby:'), {
    id: 'baby-react', force: true
  })




