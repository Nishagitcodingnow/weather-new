document.getElementById('searchBtn').addEventListener('click', function () {
    const city = document.getElementById('city').value;
    if (city) {
        fetchWeatherData(city);
    } else {
        alert('Please enter a city name.');
    }
});

async function fetchWeatherData(city) {
    const apiKey = 'f5889c5534c2dcb8472e268c8a3eff8f'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        alert('Could not fetch weather data. Please try again.');
    }
}

function displayWeather(data) {
    const cityName = data.name;
    const description = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;

    document.getElementById('cityName').textContent = cityName;
    document.getElementById('description').textContent = `Weather: ${description}`;
    document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
}
