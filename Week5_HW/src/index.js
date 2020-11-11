
//current date and time using 

function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];
  return `${day} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

//search city

function displayWeather(response) {
  console.log(response);
  document.querySelector ("#city").innerHTML = response.data.name;
  document.querySelector ("#temperature").innerHTML = Math.round (response.data.main.temp);
  document.querySelector ("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector ("#wind").innerHTML = response.data.wind.speed;
  document.querySelector ("#description").innerHTML = response.data.weather[0].main;

}

function searchCity(city) {
  let apiKey = "70af34d88109a9773ca90c543a744665";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
  
}

function search(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity(city);
    
  }
  
  
  function showPosition (position) {
    let apiKey = "70af34d88109a9773ca90c543a744665";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    
    axios.get(apiUrl).then(displayWeatherCondition);
  }
  
  
  function getCurrentLocation (event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
    
  }
  
  
    let searchForm = document.querySelector ("#search-form");
    searchForm.addEventListener ("submit", search);

    let currentLocation = document.querySelector("#current-location-button");
    currentLocation.addEventListener = ("click", getCurrentLocation);

      //searchCity("New York")


