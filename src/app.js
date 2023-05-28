function displayTemperature(response) {
	let temperatureElement = document.querySelector("#temperature");
	temperatureElement.innerHTML = Math.round(response.data.temperature.current);
	let cityElement = document.querySelector("#city");
	cityElement.innerHTML = response.data.city;
	let descriptionElement = document.querySelector("#description");
	descriptionElement.innerHTML = response.data.condition.description;
	let humidityElement = document.querySelector("#humidity");
	humidityElement.innerHTML = response.data.temperature.humidity;
	let windElement = document.querySelector("#wind");
	windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "fed24a4a3934t32fo5a63bbe36a70167";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Amsterdam&key=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
