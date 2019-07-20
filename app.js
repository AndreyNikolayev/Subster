var telegram = require('./telegram');
var schedule = require('node-schedule');

const urlsToTrace = {
  mangalib: [
    'https://mangalib.me/onepunchman',
    'https://mangalib.me/shingeki-no-kyojin'
  ]
};

var rule = {
  hour: 9,
  minute: 0
};

schedule.scheduleJob(rule, function() {
  for(var scraperName in urlsToTrace) {
    const scraper = require('./scraper/' + scraperName);
    const currentScraperUrls = urlsToTrace[scraperName];
    currentScraperUrls.forEach(url => {
      scraper.handle(url).then((result) => {
        telegram.sendMessage(result).then(() => {
          console.log('Success');
        }, (error) => {
          console.log(error);
        })
      });
    });
  };
});