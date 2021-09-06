const API_KEY = "5901937f27eedafe0b91229f5f10fd22";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const weatherIcon = document.querySelector("#icon");
        city.innerText = data.name;
        weather.innerText = `${data.main.temp}°C`;
        weatherIcon.innerHTML = `<img src= http://openweathermap.org/img/w/${data.weather[0].icon}.png />`;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);