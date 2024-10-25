const apiKey = 'Yhttps://api.openweathermap.org/data/2.5/weather?q=city&appid';

const getWeather = async () => {
    const city = document.getElementById('cityInput').value;
    const weatherResult = document.getElementById('weatherResult');

    if (!city) {
        weatherResult.innerHTML = 'Please enter a city name.';
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const location = data.name;

        weatherResult.innerHTML = `
            <h2>${location}</h2>
            <p>Temperature: ${temperature} °C</p>
            <p>Description: ${description}</p>
        `;
    } catch (error) {
        weatherResult.innerHTML = `Error: ${error.message}`;
    }
};

document.getElementById('getWeather').addEventListener('click', getWeather);
