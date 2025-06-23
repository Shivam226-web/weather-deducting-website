const apiKey ="0bbab8c49514cfba9044be02b83a7bb5";
const apuiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=kanpur";
async function checkWeather() {
    const response = await fetch(apuiUrl + `&appid=${apiKey}`)
    var deta = await response.json();
    console.log(deta);
    
}
checkWeather();