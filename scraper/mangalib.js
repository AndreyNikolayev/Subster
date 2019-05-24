var axios = require('axios');
var cheerio = require('cheerio');

const handle = async(url, options) => {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  const title = $('.manga-title h1').text();
  const latestChapter = $('.chapter-item a').first().text().replace(/\s\s+/g, ' ').trim();
  const result = 'Последняя вышедшая глава комикса '+ title+': "'+latestChapter+'"';

  return result;
};

module.exports = {
  handle: handle
};