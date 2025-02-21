function searchCity(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-name")
    let cityElement = document.querySelector("#city-h1")
    if (cityInput.value) {
        cityElement.innerHTML = cityInput.value;
    } else {
        alert('That is not a valid city name 🤔 Please try again.')
    }
}

let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener("submit", searchCity)