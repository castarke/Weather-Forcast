
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
var previousCityArray = JSON.parse(localStorage.getItem('previousCities')) || [];
var previousSearchesList = document.querySelector("#searched .list-group")

async function getUrl(testCity){
    var apiLink = `https://api.openweathermap.org/data/2.5/forecast?q=${testCity}&units=imperial&lang=en&appid=f443a7bf0556b76f0d415dce60061886`;
    console.log(apiLink);
    var response = await fetch(apiLink)
    var data = await response.json()
    // .then(function(response){
    //     var data = response.json()
    //     console.log(data)
    // })
    // .then(function(data){
    //     for (var i = 0; i < data.length; i++){
    //         console.log(data[i]);
    //         console.log(data.list[0].dt_txt);
    // // console.log(data.list[0].dt_txt);
    //     }
    // });
    // days incremit by 8 so do a for loop = 8
    var test = data.list[0].dt_txt
    console.log(dayjs(test).format('MM-DD-YYYY'))
    
    return data;
    

}
getUrl()


function renderPreviousSearches() {
    // Clear previous searches list
    previousSearchesList.innerHTML = "";
  
    // Create a set of unique cities
    var uniqueCities = new Set(previousCityArray);
  
    // Loop through unique cities and create list item for each city
    uniqueCities.forEach(function(city) {
        var listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.textContent = city;
        previousSearchesList.appendChild(listItem);
      
        // Add click listener to list item
        listItem.addEventListener("click", function() {
            getUrl(city);
        });
    });
}

// Call renderPreviousSearches() once when the page loads to render the initial list of previous searches
renderPreviousSearches();

$(".searchBtn").on('click',function(){
    var newCity = previousCityArray.indexOf(citySearch.value);
    if (newCity >= 0) {
        // City already exists in the array, do not add it again
        console.log('City already exists in the array');
    } else {
        // City does not exist in the array, add it
        previousCityArray.push(citySearch.value);
        localStorage.setItem('previousCities', JSON.stringify(previousCityArray));
        console.log(citySearch.value);
        var testCity = citySearch.value;
        getUrl(testCity);
        renderPreviousSearches();
    }
});

var date = dayjs().format('dddd, MMMM D YYYY');
$("#currentTime").html(date);


document.querySelector("#citySearch").value;
$("#cities").on("click",function(event) {
event.preventDefault();

console.log(citySearch.value);
})



