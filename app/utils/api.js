import axios from 'axios';

const id = '4cc8ed9f6d9e1ceed2264a132cbc3d5e';
const params = '?zip=';
const zipcode = '11222';
const url = 'https://api.openweathermap.org/data/2.5/forecast'+ params+ zipcode + '&APPID=' + id;
//API call:
//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
//Parameters:
//APPID {APIKEY} is your unique API key
//Example of API call:
//api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111



module.exports = {
  getForecast: function() {
    //const encodedURI = window.encodedURI('https://api.openweathermap.org/data/2.5/forecast'+ params+ zipcode + '&APPID=' + id)
    return axios.get(url)
      .then(function(jsonObj) {
        return jsonObj;
      });
  }
};
