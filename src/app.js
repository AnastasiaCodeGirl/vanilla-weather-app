function displayTemperature(response) {
	console.log(response.data.main.temp);
}
let apiKey = "917b5cb46b9991bd0ab660f50601d0c6";
let cityName = "Malaga";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
