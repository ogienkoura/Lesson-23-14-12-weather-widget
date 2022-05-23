// fetch(
//   "http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19"
// )
//   .then((res) => res.json())
//   .then((data) => {
//     let temp = data.main.temp;
//     let pressure = data.main.pressure;
//     let description = data.weather[0].description;
//     let humidity = data.main.humidity;
//     let speed = data.wind.speed;
//     let deg = data.wind.deg;
//     let icon = data.weather[0].icon;

//     let widget = document.createElement ("widget");
//     widget.innerHTML = `<div class="widget">
//     <p class="temp">${temp}</p>
//     <p class="pressure"></p>
//     <p class="description"></p>
    
//     </div>`

// })


let button = document.querySelector(".button");
let inputValue = document.querySelector("input");
let nameW = document.querySelector(".name");
let tempW = document.querySelector(".temp");
let pressureW = document.querySelector(".pressure");
let descriptionW = document.querySelector(".description");
let humidityW = document.querySelector(".humidity");
let speedW = document.querySelector(".speed");
let degW = document.querySelector(".deg");
let weatherIcon = document.querySelector(".weather-icon");


button.addEventListener("click", function() {
  fetch (`http://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
  .then((res) => res.json())
  .then ((data) => {
    nameW.textContent = data.name;
    tempW.innerHTML = `Temp: ${data.main.temp} &degC`;
    pressureW.textContent = `Pressure: ${data.main.pressure} hPa`;
    descriptionW.textContent = `Description: ${data.weather[0].description}`;
    humidityW.textContent = `Humidity: ${data.main.humidity}%`;
    speedW.textContent = `Speed: ${data.wind.speed} km/h SSE`;
    degW.textContent = `Deg: ${data.wind.deg}`; 
    weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  });
})
