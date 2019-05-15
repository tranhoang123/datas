const bot = require('bbot')
 
bot.global.text(/say Hello World/, (b) => {
  b.respond(`Hello World!`)
})
 
bot.start()