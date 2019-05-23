var request = require('request');
var cheerio = require('cheerio');
var config = require('./config');

var mangaUrl = 'https://mangalib.me/onepunchman';

request(mangaUrl, function(err, resp, html) {
  if (err){
    console.log(err);
  }
  const $ = cheerio.load(html);
  const latestChapter = $('.chapter-item a').first().text();
  const telegramMessage = 'Последняя вышедшая глава Ванпанчмена: "'+latestChapter+'"';

  request.post({
    uri: 'https://api.telegram.org/bot'+ config.telegramBotToken +'/sendMessage',
    form: {
      chat_id: config.telegramId,
      text: telegramMessage
    }
  }, function(err, resp, body) {
    if(err) {
      console.log(err);
    }
    console.log(resp);
  });
});