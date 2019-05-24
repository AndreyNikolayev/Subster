var config = require('./config');
var axios = require('axios');

const sendMessage = async(message, telegramId = config.telegramId) => {
  var result = await axios.post('https://api.telegram.org/bot'+ config.telegramBotToken +'/sendMessage', {
  chat_id: telegramId,
  text: message
  });
  return result;
};

module.exports = {
  sendMessage: sendMessage
};