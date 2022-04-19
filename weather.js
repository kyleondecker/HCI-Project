var data = document.getElementById("localdata");
var weekData = document.getElementById("weeklydata");
var Latitude;
var Longitude;
var key = "a235109645429817ed4cb575d70b7df9";
var url = "http://api.openweathermap.org/data/2.5/weather?";
var weekUrl = "http://api.openweathermap.org/data/2.5/onecall?"

// Function to get the latitude and longitude data
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        data_of_Lat_Lon.innerHTML = 
            "Geolocation is not supported by this browser";
    }
}
  
// Function to fetch the Latitude and Longitude
// from position data
function showPosition(position) {
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
  
    getData(Latitude, Longitude);
}

// Fetching the data and calling the API
function getData(Lat, Lon) {
    const readyToSent = (url + "lat=" + Lat 
        + "&lon=" + Lon + "&appid=" + key + "&units=imperial");
    
    fetch(readyToSent)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            fetchData(data)
        })
}
function getWeeklyData(Lat, Lon) {
    const readyToSentWeekly = (weekUrl + "lat=" + Lat 
        + "&lon=" + Lon + "&exclude=minutely,hourly,alerts&units=imperial&appid=" + key);
    
    fetch(readyToSentWeekly)
        .then(response => response.json())
        .then(weekData => {
            console.log(weekData);
            fetchWeeklyData(weekData)
        })
}


function fetchData(data) {
    const icon = "http://openweathermap.org/img/wn/"
        + data.weather[0].icon + "@4x.png"
  
    document.getElementById("localdata").innerHTML =
        "<b>The weather report of your Location is :-"
            + "</b><br> <img src=" + icon + "><br>"
            + "<b>Country :</b>" + data.sys.country 
            + "<br><b>Local Area Name :</b>" 
            + data.name + "<br><b>Temp. :</b>" 
            + parseFloat(data.main.temp)
            .toFixed(0) + " degrees" +
            "<br><b>But You will feel like :</b>" 
            + parseFloat(data.main.feels_like).toFixed(0) + " degrees"
            + "<br><b>Min. Temp. :</b>" 
            + parseFloat(data.main.temp_min).toFixed(0) + " degrees"
            + "<br><b>Max. Temp. :</b>" 
            + parseFloat(data.main.temp_max).toFixed(0) + " degrees"
            + "<br><b>Pressure :</b>" 
            + data.main.pressure + "hPa" 
            + "<br><b>Humidity :</b>" 
            + data.main.humidity + "%" 
            + "<br><b>Weather :</b>" 
            + data.weather[0].description + "<br>"
}

function fetchWeeklyData(weekData) {
    const icon = "http://openweathermap.org/img/wn/"
        + weekData.daily[0].weather.icon + "@4x.png"
    document.getElementById("weeklydata").innerHTML =
        "<b>The weather report of your Location is :-"
            + "</b><br> <img src=" + icon + "><br>"

            
}
  
// Function call
getLocation();
showPosition();
getData();
getWeeklyData();
