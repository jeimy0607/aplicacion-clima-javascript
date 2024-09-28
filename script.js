const apiKey = "b6bd1ed467df9cf49762be5c336d1519";
const url = `https://api.openweathermap.org/data/2.5/weather`;
const diffKelvin = 273.15;

document.getElementById("searchButton").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city) {
    //Se llama la API para que nos de la información del clima
    fetchWeather(city);
  } else {
    alert("Ingrese una ciudad válida");
  }
});


function fetchWeather(city) {
    fetch(`${url}?q=${city}&appid=${apiKey}&lang=es`)
    .then(data => data.json())
    .then(data => showWeatherData(data))
}

function showWeatherData(data) {
    let informacionCiudad = document.getElementById("responseData");
    informacionCiudad.innerHTML = ""

    const cityName = data.name 
    const countryName = data.sys.country
    const temp = data.main.temp
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const cityInfo = document.createElement("h2")
    cityInfo.textContent = `${cityName}, ${countryName}`

    const tempInfo = document.createElement("p")
    tempInfo.textContent = `La temperatura es: ${Math.floor(temp-diffKelvin)}ºC`

    const humidityInfo = document.createElement("p")
    humidityInfo.textContent = `La humedad es del: ${humidity}%`

    const icoInfo = document.createElement("img")
    icoInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement("p")
    descriptionInfo.textContent = `La descripción meteorológica es: ${description}`

    //Se agregan al DIV correspondiente cada uno de los hijos(elementos creados)
    informacionCiudad.appendChild(cityInfo)
    informacionCiudad.appendChild(tempInfo)
    informacionCiudad.appendChild(humidityInfo)
    informacionCiudad.appendChild(icoInfo)
    informacionCiudad.appendChild(descriptionInfo)
}