var request = require('request');
var cheerio = require('cheerio');

var mangaUrl = 'https://mangalib.me/onepunchman';

request(mangaUrl, function(err, resp, html) {
        if (!err){
          const $ = cheerio.load(html);
          const latestChapter = $('.chapter-item a').first().text();
          console.log(latestChapter); 
      }
});