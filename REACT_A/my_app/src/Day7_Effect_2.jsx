import React, { useState, useEffect } from 'react';

const Day7_Effect_2 = () => {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('Chennai');
  
    useEffect(() => {
      const fetchWeather = async () => {
        try {
          let url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d4a760bc6e759aaa4958a53637de149b&units=metric`)
          let data = await url.json();
          console.log(data);
          
          setWeather(data);
        } catch (error) {
          console.log("Error fetching weather:", error);
        }
      };
  
      fetchWeather();
    }, [city]); // runs again when city changes
  
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h2>🌤 Weather App</h2>
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: "8px", width: "200px" }}
        />
        {weather && weather.main ? (
          <div style={{ marginTop: "20px" }}>
            <h3>{weather.name}</h3>
            <p>🌡 Temp: {weather.main.temp} °C</p>
            <p>💧 Humidity: {weather.main.humidity}%</p>
            <p>🌬 Wind: {weather.wind.speed} m/s</p>
            <p>☁️ Condition: {weather.weather[0].description}</p>
          </div>
        ) : (
          <p>Loading weather...</p>
        )}
      </div>
    );
}

export default Day7_Effect_2
