const TgBot = require('node-telegram-bot-api')

const TOKEN = "5786456886:AAHbAfSy3CHiLdZA8pxjNBRehNenFmQRGe8"

const bot  = new TgBot(TOKEN, {
    polling: true
})

bot.on('message', msg => {
    if(msg.text == "love")
        bot.sendMessage(msg.chat.id, "I Love You \u2661")

    // bot.sendMessage("I love you")
})