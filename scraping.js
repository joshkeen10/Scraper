//Include packages and open express.
var cheerio = require('cheerio'),
    fs = require('fs'),
    request = require('request');

//Create variables for counter and scheduled tasks.
//var counter = 0,
  //  schedule = require('node-schedule'),
  //  taskSchedule = new schedule.RecurrenceRule();

//Schedule task to run once a day at 6 am.
//taskSchedule.hour = 9;
//taskSchedule.minute = 45;

//NPB Teams
var NPBTeams = ['DeNA', 'Nippon-Ham', 'Orix', 'Rakuten', 'Seibu', 'SoftBank', 'Yomiuri'];

//Tasks to run.
//function reportOnSchedule(){

//Set datetime and filename.
var date = new Date(),
    year = (date.getFullYear()).toString(),
    month = (date.getMonth() + 1).toString(),
    month = month.length > 1 ? month : '0' + month,
    day = (date.getDate()).toString(),
    day = day.length > 1 ? day : '0' + day,
    day = 31,
    webpage = year + month + day,
    url = 'http://npb.jp/bis/eng/2017/games/gm' + webpage +'.html';

request(url, function(err, response, html){
  if (err) throw err;
  else {
    var $ = cheerio.load(html);
    var Date, HomeTeam, AwayTeam, League, Notes;
    var json = {Date : "", HomeTeam : "", AwayTeam : "", League: "", Notes: ""};

    //console.log('statusCode:', response && response.statusCode);

    $('.contentsgame').filter(function(){
      var data = $(this).first().first().last().text();
      var test = data;
      console.log(test);
    });
    
    // var games = [];
    //
    // $('.contentsgame').filter(function(i, element){
    //   games = $(this).next().text();
    // });
    //
    // console.log(games)

    // $('td.contentsTeam').each(function(i, element){
    //   var a = $(this).text();
    //   console.log(a);
    // });
  };
});
