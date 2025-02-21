function searchCity (event){
    event.preventDefault();
    let cityInput = document.querySelector("#city-name")
    let cityElement = document.querySelector("#city-h1")
    cityElement.innerHTML = cityInput.value;
}

let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener("submit", searchCity)