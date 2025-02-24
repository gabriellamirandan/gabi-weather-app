function updateWeather(response) {
    let temperatureElement = document.querySelector("#temperature-value");
    let currentTemperature = response.data.temperature.current;

    let cityElement = document.querySelector("#city-h1");

    let descriptionElement = document.querySelector("#weather-description");
    let currentDescription = response.data.condition.description;

    let humidityElement = document.querySelector("#humidity");
    let currentHumidity = response.data.temperature.humidity;

    let windElement = document.querySelector("#wind");
    let currentWind = response.data.wind.speed;

    let dateElement = document.querySelector("#date");
    let currentDate = new Date();

    let timeElement = document.querySelector("#time");

    let iconElement = document.querySelector("#temperature-icon");
    let iconUrl = response.data.condition.icon_url;

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(currentTemperature);
    descriptionElement.innerHTML = currentDescription;
    humidityElement.innerHTML = currentHumidity;
    windElement.innerHTML = currentWind;
    dateElement.innerHTML = formatDate(currentDate);
    timeElement.innerHTML = formatTime(currentDate);
    iconElement.innerHTML = `<img src="${iconUrl}" alt="">`;
}

function formatDate(date) {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${month[date.getMonth()]} ${date.getDate()},`
}

function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    if (hours < 10) {
        hours = `0${hours}`
    }
    return `${hours}:${minutes}`
}

function searchCityAPI(city) {
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

function displayForecast() {
    let forecast = document.querySelector("#forecast");
    let days = ['Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let forecastHtml = "";
    days.forEach(day => {
        forecastHtml = 
        forecastHtml + `
                        <div class="weather-forecast-day">
                    <div class="weather-forecast-date">${day}</div>
                    <div class="weather-forecast-icon">⛅️</div>
                    <div class="weather-forecast-temperatures">
                        <div class="weather-forecast-temperature-max">15º</div>
                        <div class="weather-forecast-temperature-min">9º</div>
                    </div>
                </div>
                `;
    });

    forecast.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener("submit", searchCity);

searchCityAPI("Lisbon");
displayForecast();


/* 
                <div class="weather-forecast-day">
                    <div class="weather-forecast-date">Tue</div>
                    <div class="weather-forecast-icon">⛅️</div>
                    <div class="weather-forecast-temperatures">
                        <div class="weather-forecast-temperature-max">15º</div>
                        <div class="weather-forecast-temperature-min">9º</div>
                    </div>
                </div>
                <div class="weather-forecast-day">
                    <div class="weather-forecast-date">Wed</div>
                    <div class="weather-forecast-icon">⛅️</div>
                    <div class="weather-forecast-temperatures">
                        <div class="weather-forecast-temperature-max">15º</div>
                        <div class="weather-forecast-temperature-min">9º</div>
                    </div>
                </div>
                <div class="weather-forecast-day">
                    <div class="weather-forecast-date">Thurs</div>
                    <div class="weather-forecast-icon">⛅️</div>
                    <div class="weather-forecast-temperatures">
                        <div class="weather-forecast-temperature-max">15º</div>
                        <div class="weather-forecast-temperature-min">9º</div>
                    </div>
                </div>
                <div class="weather-forecast-day">
                    <div class="weather-forecast-date">Fri</div>
                    <div class="weather-forecast-icon">⛅️</div>
                    <div class="weather-forecast-temperatures">
                        <div class="weather-forecast-temperature-max">15º</div>
                        <div class="weather-forecast-temperature-min">9º</div>
                    </div>
                </div>
                <div class="weather-forecast-day">
                    <div class="weather-forecast-date">Sat</div>
                    <div class="weather-forecast-icon">⛅️</div>
                    <div class="weather-forecast-temperatures">
                        <div class="weather-forecast-temperature-max">15º</div>
                        <div class="weather-forecast-temperature-min">9º</div>
                    </div>
                </div>
*/