async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
  
      // Check if the response is successful
      if (!response.ok) {
        if (response.status === 404) {
          document.getElementById('error').textContent = "City not found. Please try again.";
        } else {
          document.getElementById('error').textContent = `Error: ${response.statusText} (${response.status})`;
        }
        return;
      }
  
      const data = await response.json();
  
      document.getElementById('error').textContent = '';  // Clear any previous error
      document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById('weatherCondition').textContent = `Condition: ${data.weather[0].description}`;
      document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
  
    } catch (error) {
      document.getElementById('error').textContent = "Error fetching data, please try again later.";
      console.error('Fetch Error:', error);
    }
  }
  