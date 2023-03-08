
$(document).ready(function(){
    console.log('ready!')
})

// Listing global variables
var city = document.getElementById('citySearch')
var previousSearched = document.querySelector("#searched")
var previousCityArray = JSON.parse(localStorage.getItem('previousCities')) || [];
var previousSearchesList = document.querySelector("#searched .list-group")

// Getting the 5 day forcast api data
async function getUrl(testCity){

    var apiLink = `https://api.openweathermap.org/data/2.5/forecast?q=${testCity}&units=imperial&lang=en&appid=f443a7bf0556b76f0d415dce60061886`;
    console.log(apiLink);
    var response = await fetch(apiLink)
    var data = await response.json()

    console.log(data);

    renderFutureWeather(data)

}

// Getting the current weather forcast api data
async function getCurrentUrl(testCity){

    var currentApiLink =`https://api.openweathermap.org/data/2.5/weather?q=${testCity}&units=imperial&lang=en&appid=533b1cafdc14cae714c56b255818f0eb`
    console.log(currentApiLink);
    var response = await fetch(currentApiLink);
    var currentData = await response.json()
    
    console.log(currentData);

    renderCurrentWeather(currentData)
}

// Displaying previously searched cities
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
      
        // Add click listener to list item, pulling api data for current weather and 5 day forcast
        listItem.addEventListener("click", function() {
            getUrl(city);
            getCurrentUrl(city);
       });
    });
}

// Call renderPreviousSearches() once when the page loads to render the initial list of previous searches
renderPreviousSearches();

// Adding an event listener for when the search button is clicked
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
        getCurrentUrl(testCity)
        renderPreviousSearches();
    }
});

// Displaying the time and date at the top of the page
var date = dayjs().format('dddd, MMMM D YYYY');
$("#currentTime").html(date);

// Displaying the current weather data onto the page
function renderCurrentWeather(data){
var currentDay = data
$("#current-city").text("Current City: " + data.name);
$("#current-temp").text("Temperature (degrees): " + currentDay.main.temp);
$("#current-climate").text(currentDay.weather[0].description);
$("#current-date").text("Date: " + date);
$("#current-wind").text("Speed (mph): " + currentDay.wind.speed);
$("#current-humidity").text("Humidity: " + currentDay.main.humidity);
$("#current-img").attr("src", `https://openweathermap.org/img/wn/${currentDay.weather[0].icon}.png`);

}

// Displaying the 5 day forcast onto the page
function renderFutureWeather(data){

// Displaying the first days data
var dayOne = data.list[0];
$("#forcast1-city").text("Current City: "+ data.city.name);
$("#forcast1-temp").text("Temperature (degrees): " + dayOne.main.temp);
$("#forcast1-climate").text(dayOne.weather[0].description);
$("#forcast1-date").text("Date: " +dayOne.dt_txt);
$("#forcast1-wind").text("Speed (mph)" + dayOne.wind.speed);
$("#forcast1-humidity").text("Humidity: " + dayOne.main.humidity);
$("#forcast1-img").attr("src", `https://openweathermap.org/img/wn/${dayOne.weather[0].icon}.png`);

// Displaying the second days data
var dayTwo =data.list[8];
$("#forcast2-city").text("Current City: "+ data.city.name);
$("#forcast2-temp").text("Temperature (degrees): " + dayTwo.main.temp);
$("#forcast2-climate").text(dayTwo.weather[0].description);
$("#forcast2-date").text("Date: " +dayTwo.dt_txt);
$("#forcast2-wind").text("Speed (mph)" + dayTwo.wind.speed);
$("#forcast2-humidity").text("Humidity: " + dayTwo.main.humidity);
$("#forcast2-img").attr("src", `https://openweathermap.org/img/wn/${dayTwo.weather[0].icon}.png`);

// Displaying the third days data
var dayThree =data.list[16];
$("#forcast3-city").text("Current City: "+ data.city.name);
$("#forcast3-temp").text("Temperature (degrees): " + dayThree.main.temp);
$("#forcast3-climate").text(dayThree.weather[0].description);
$("#forcast3-date").text("Date: " +dayThree.dt_txt);
$("#forcast3-wind").text("Speed (mph)" + dayThree.wind.speed);
$("#forcast3-humidity").text("Humidity: " + dayThree.main.humidity);
$("#forcast3-img").attr("src", `https://openweathermap.org/img/wn/${dayThree.weather[0].icon}.png`);

// Displaying the fourth days data
var dayFour = data.list[24]
$("#forcast4-city").text("Current City: "+ data.city.name);
$("#forcast4-temp").text("Temperature (degrees): " + dayFour.main.temp);
$("#forcast4-climate").text(dayFour.weather[0].description);
$("#forcast4-date").text("Date: " +dayFour.dt_txt);
$("#forcast4-wind").text("Speed (mph)" + dayFour.wind.speed);
$("#forcast4-humidity").text("Humidity: " + dayFour.main.humidity);
$("#forcast4-img").attr("src", `https://openweathermap.org/img/wn/${dayFour.weather[0].icon}.png`);

// Displaying the fifth days data
var dayFive = data.list[32]
$("#forcast5-city").text("Current City: "+ data.city.name);
$("#forcast5-temp").text("Temperature (degrees): " + dayFive.main.temp);
$("#forcast5-climate").text(dayFive.weather[0].description);
$("#forcast5-date").text("Date: " +dayFive.dt_txt);
$("#forcast5-wind").text("Speed (mph)" + dayFive.wind.speed);
$("#forcast5-humidity").text("Humidity: " + dayFive.main.humidity);
$("#forcast5-img").attr("src", `https://openweathermap.org/img/wn/${dayFive.weather[0].icon}.png`);

}

