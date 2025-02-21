function updateWeather (response) {
    let temperatureElement = document.querySelector("#temperature-value");
    let currentTemperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city-h1");
    let humidityElement = document.querySelector("#humidity");
    let currentHumidity = response.data.temperature.humidity;
    let windElement = document.querySelector("#wind");
    let currentWind = response.data.wind.speed;

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(currentTemperature);
    humidityElement.innerHTML = currentHumidity;
    windElement.innerHTML = currentWind
}

function searchCityAPI (city){
    let apiKey = "3e46b86b8308faao2ct16f0ddbe04ffa";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(updateWeather);
}

function searchCity(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-name")
    if (cityInput.value) {
        searchCityAPI(cityInput.value);
    } else {
        alert('That is not a valid city name 🤔 Please try again.')
    }
}

let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener("submit", searchCity)