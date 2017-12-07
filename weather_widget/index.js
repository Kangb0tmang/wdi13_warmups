var express = require ('express');
var app = express();
const request = require('request');
const locationAPI = 'http://ip-api.com/json/';
// const url = "http://api.openweathermap.org/data/2.5/weather?id=7839805&units=metric&APPID=2238008fbaff4c10330517bafb6b3b5a"

var function getLocation() {

}

request(locationAPI, function(err, response, body)
{
  lat = JSON.parse(body).lat
  lon = JSON.parse(body).lon
  console.log(`${lat}, ${lon}`);

  const weatherAPI = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`
})