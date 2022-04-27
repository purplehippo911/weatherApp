// I'm using openweather.org for the api
const weather = {
    "apikey": "e0de73858b1615a63b9ff402184ba1cc",
    fetchWeather: function(city) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apikey}`
        ).then((response) => response.json())
        .then(((data) => this.displayWeather(data)));
    },
    displayWeather: function(data) {
    const { name } = data;
    const { icon, description, main } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = `Weather in ${name}`;
    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    document.querySelector(".description").innerText = `${description}`;
    document.querySelector(".temp").innerHTML = `<h1 class="temp">${temp}&#176;C</h1>`;
    document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
    document.querySelector(".wind").innerText = `Wind speed:${speed} km/h`;
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${name} ")`
},
  search: function() {
    this.fetchWeather(document.querySelector("#input").value);
  }
};

document.querySelector("button").addEventListener("click", () => {
 weather.search();
});

document.querySelector("#input").addEventListener("keyup", (e) => {
    if(e.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Osaka");

