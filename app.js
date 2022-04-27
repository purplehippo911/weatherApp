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
    const { icon, description } = data.weather;
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed )
    }
};

const button = document.querySelector("button")
