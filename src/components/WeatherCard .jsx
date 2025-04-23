import React, { useState, useEffect } from 'react';

const WeatherCard = () => {
  const [city, setCity] = useState('Sasaram');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "0b11e7acf65f4e1ca4991101250804"; // 👈 Apna API key yahan daalo

  useEffect(() => {
    if (!city || city.trim().length < 2) return;

    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
        );

        if (!res.ok) throw new Error("City not found");

        const data = await res.json();
        setWeather(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setWeather(null);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-900 to-indigo-950 text-white flex flex-col items-center justify-center gap-6 p-4">
      <h1 className="text-2xl font-bold tracking-wide">Welcome to Dubey Ji's Weather App ☀️</h1>

      <input
        type="text"
        placeholder="Enter city name"
        className="p-2 rounded-md w-64 text-black text-center focus:outline-none"
        onChange={(e) => setCity(e.target.value)}
      />

      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 w-80 text-center">
        {error && <p className="text-red-400">{error}</p>}

        {weather ? (
          <>
            <h2 className="text-2xl font-bold mb-1">{weather.location.name}, {weather.location.country}</h2>
            <p className="text-sm text-slate-300 mb-4">{weather.location.localtime}</p>

            <div className="flex items-center justify-center mb-4">
              <img src={`https:${weather.current.condition.icon}`} alt="Weather Icon" />
              <span className="text-4xl font-bold ml-2">{weather.current.temp_c}&deg;C</span>
            </div>

            <p className="capitalize text-lg mb-2">{weather.current.condition.text}</p>

            <div className="text-sm text-slate-300 space-y-1">
              <p>💧 Humidity: {weather.current.humidity}%</p>
              <p>🌬️ Wind: {weather.current.wind_kph} km/h</p>
              <p>🔍 Visibility: {weather.current.vis_km} km</p>
            </div>
          </>
        ) : (
          !error && <p className="text-slate-300">Loading weather...</p>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
