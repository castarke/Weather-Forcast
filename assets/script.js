
$(document).ready(function(){
    console.log('ready!')
})

// going to need to customize the url links to fit my paramaters. examples below api links
var requestCurrentWeather = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={apikey}';
// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
var requestFutureWeather = 'https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid={apikey}';
// api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={API key}
// var requestGeoUrl = 'https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={apikey}';
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}


// var currentApiKey = '533b1cafdc14cae714c56b255818f0eb'
// var geoApiKey = '00b453bc62ba08c25a70335484e64353'
var futureApiKey = 'f443a7bf0556b76f0d415dce60061886'
// var apiLink = 'https://api.openweathermap.org/data/2.5/forecast?q=${testCity}&units=imperial&lang=en&appid=f443a7bf0556b76f0d415dce60061886';
// var units = 'imperial'
// var lang = 'en'
var city = document.getElementById('citySearch')
var previousSearched = document.querySelector("#searched")
var previousCityArray = [];
var previousSearchesList = document.querySelector("#searched .list-group-item")

function getUrl(testCity){
    var apiLink = `https://api.openweathermap.org/data/2.5/forecast?q=${testCity}&units=imperial&lang=en&appid=f443a7bf0556b76f0d415dce60061886`;
    console.log(apiLink);
    fetch(apiLink)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        for (var i = 0; i < data.length; i++){
            console.log(data[i]);
        }
    });
}
getUrl()

let earlySearch= JSON.parse(localStorage.getItem("searched")) ||[];

if (earlySearch !== null) {
    for (let i = 0; i < earlySearch.length; i++) {
        if (earlySearch[i] === null) {
            earlySearch.splice(i, i+1);
        } else {
            // Populates previous to publish previous search buttons
            previousCityArray.push(earlySearch[i]);
        }
    }
}

function searchHistoryRefresh() {
    // Pulls localStorage results of previous searches
    earlySearch = JSON.parse(localStorage.getItem("searched"));

    // Declared under function to ensure list is updated each time
    var existingCities = document.querySelectorAll("#searched list-group-item button");

    if (finder !== null) {
        existingCities.forEach(function(button) {
            // Ensures buttons aren't repeated for existing searches
            for (let i = 0; i < finder.length; i++)
            if (button.dataset.city.includes(finder[i])) {
                finder.splice(i, i + 1);
            }
        })
        for (let i = 0; i < finder.length; i++) {
            var searchBtn = document.createElement("button");
            searchBtn.classList.add("m-2", "btn", "btn-light");
            // Sets data-city attribute on button for event listener to reference
            searchBtn.dataset.city = finder[i];
            searchBtn.textContent = finder[i];
            searchBtn.addEventListener("click", (event) => {
                // References data-city property to call API
                // callOpenWeather(event.target.dataset.city);
            })
            previousSearchesList.appendChild(searchBtn); 
        }
    }
}

var updateCities = (city) => {
    // Ensures searched city isn't pushed into array (and then localStorage) if city has already been searched
    if (previousCityArray.includes(city)) {
        return;
    } else {
        previousCityArray.push(city);
        // Stores for next user visit
        localStorage.setItem("searched", JSON.stringify(previousCityArray));
        
        // Calls searchHistoryRefresh to add new search to previous search buttons
        searchHistoryRefresh();
    }
}
$(".searchBtn").on('click',function(){
    localStorage.setItem(citySearch.value ,date)
    console.log(citySearch.value);
    var testCity = citySearch.value;
    getUrl(testCity)
})

var date = dayjs().format('dddd, MMMM D YYYY');
$("#currentTime").html(date);

// function getApi(requestCurrentWeather , requestFutureWeather){
//     fetch(requestCurrentWeather , requestFutureWeather)

//         .then(function(response){
//             return response.json();
//         })
//         .then(function(data){
//             console.log(data);
//         })
// }


document.querySelector("#citySearch").value;
$("#cities").on("click",function(event) {
event.preventDefault();

console.log(citySearch.value);
})