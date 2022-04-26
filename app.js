// I'm using openweather.org for the api
const weather = {
    "apikey": "e0de73858b1615a63b9ff402184ba1cc",
    fetchWeather: function(city) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apikey}`
        ).then((response) => response.json())
        .then(((data) => console.log(data)));
    },
    displayWeather: function(data) {
    const { name } = data;
    const { main.temp } = data.temp;
    const { description } = description;
    const { main.humidity } = data.humidity;
    const { wind.speed } = windspeed;
    console.log(data.temp)
    }
};