var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
request('https://www.youtube.com/', function (error, response, data) {
  // code here
  var $ = cheerio.load(data);

  var neighborhoods = $('.info-window-content').map(function(index, element) {
        return {
            name: $(element).find('h4').text(),
            link: $(element).find('a').attr('href')
        };
    }).get();

    console.log(neighborhoods);
    // console.log(data);
    var strNeighborhoods = JSON.stringify(neighborhoods);
    var jsNeighborhoods = JSON.parse(strNeighborhoods);
    console.log(jsNeighborhoods);
    fs.writeFile(
                  "you/youtube.html",
                  data,
                  "utf-8",
                  function(err) {
                    if (err) throw err;  
                  }
                );
});