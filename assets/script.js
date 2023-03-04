
$(document).ready(function(){
    console.log('ready!')
})

// going to need to customize the url links to fit my paramaters. examples below api links
var requestCurrentWeather = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apikey}';
// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
var requestFutureWeather = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={apikey}';
// api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={API key}
var requestGeoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={apikey}';
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}


var currentApiKey = '533b1cafdc14cae714c56b255818f0eb'
var geoApiKey = '00b453bc62ba08c25a70335484e64353'
var futureApiKey = 'f443a7bf0556b76f0d415dce60061886'


var date = dayjs().format('dddd, MMMM D YYYY');
$("#currentTime").html(date);

function getApi(requestCurrentWeather){
    fetch(requestCurrentWeather)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
        })
}

function getApi(requestFutureWeather) {

    fetch(requestFutureWeather)

        .then(function(response) {
            return response.json();
    })
        .then(function(data) {
            console.log(data);
    })
}

function getApi(requestGeoUrl) {
    
    fetch(requestGeoUrl)

        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data)
        })
}
