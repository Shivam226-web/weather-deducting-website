// const apiKey ="0bbab8c49514cfba9044be02b83a7bb5";
// const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=kanpur";
// async function checkWeather() {
//     const response = await fetch(apiUrl + `&appid=${apiKey}`)
//     var deta = await response.json();
//     console.log(deta);
    
//     document.querySelector(".city").innerHTML= data.name;
//     document.querySelector(".temp").innerHTML= data.main.temp;
//     document.querySelector(".humidity").innerHTML= data.main.humidity;
//     document.querySelector(".wind").innerHTML= data.wind.speed;
    
// }
// checkWeather();


const apiKey = "0bbab8c49514cfba9044be02b83a7bb5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

// const apiKey = "0bbab8c49514cfba9044be02b83a7bb5";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=kanpur";

// async function checkWeather() {
//     const response = await fetch(apiUrl + `&appid=${apiKey}`);
//     const data = await response.json();
//     console.log(data);

//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = data.main.temp;
//     document.querySelector(".humidity").innerHTML = data.main.humidity;
//     document.querySelector(".wind").innerHTML = data.wind.speed;
// }

// window.addEventListener("DOMContentLoaded", checkWeather);
