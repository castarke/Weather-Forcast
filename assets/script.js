

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

$(document).ready(function(){
})

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

// below is from youtube video

// add in search for city here
// possibly use a document.getElementbyID('cities').value here? 

// const app = {
  // gets called when the page loads
//     init: () => {
        // maybe this is where we add an event listener to the search bar to apply location variables? 

    //}
    // fetchWeather: (ev) => {
    //     let lat = document.getElementById('latitude').value;
    //     let lon = document.getElementById('longitude').value;
    //     let key = (insert api keys here);
    //     let lang = 'en';
    //     let units = 'metirc;'
    //     let url = api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${requestFutureWeather}
    // double check to see if the $$$ throughout url are needed


    // fetch(url)
    // .then(respo=>){
    // if(!resp.ok) throw new Error(resp.statusText);
    // return resp.json();
    //.then(data=>){
        // app.showWeather(data);
    // }

//     showWeather: (resp)=>{
//         console.log(resp);
//     let row = document.querySelector('.weather.row');
// to replace it with new
// row.innerHTML = resp.daily.map((day ,index) => {
//     if(index <=6) {
//         let dt = new Date(day.dt * 1000); //timestamp *1000
//         let sr = new Date(day.sunrise *1000).toTimeString();
//         let ss = new Date(day.sunset *1000).toTimeString();
//         return '  <div class="col">
//         <div class="card h-85">
//         <h5 class="card-title">${dt.toDateString()}</h5>
//         //notice in the source code that i have updated part of the url to get new image
//           <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" class="card-img-top" alt="${day.weather[0].description">
//           <div class="card-body">
//             <h3 class= "card-title">${day.weather[0].main}</h3>
//             <p class="card-text">${day.temp.max}&deg;C</p>
//             <p class="card-text">${day.wind_speed}m/s,</p>
//             <p class="card-text">${day.humidity}%</p>
//             <p class="card-text">${day.pop * 100}%</p>
//           </div>'
//     }
// }).join('');

//     }

// }
//  }
 
