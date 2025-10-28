import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import fetchWeatherData from "./utils/fetchWeatherData";

export default function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!city) return;

    const getWeather = async () => {
      try {
        setError("");
        setLoading(true);
        const data = await fetchWeatherData(city);
        setWeatherData(data.current);
        setForecast(data.forecast);
      } catch (err) {
        setError("City not found or API error.");
        setWeatherData(null);
        setForecast(null);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [city]);

  const getBackgroundClass = () => {
    if (!weatherData) return "from-blue-400 via-indigo-500 to-purple-600";
    const temp = weatherData.temperature;

    if (temp < 10) return "from-blue-900 via-blue-600 to-blue-400";
    if (temp < 25) return "from-sky-500 via-indigo-500 to-blue-600";
    return "from-orange-400 via-red-500 to-pink-600";
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-start p-6 bg-gradient-to-br ${getBackgroundClass()} text-white`}>
      <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">Weather Now</h1>

      <Header onSearch={setCity} />

      {loading && <p className="mt-6 text-white/90 animate-pulse">Loading...</p>}
      {error && <p className="mt-6 text-red-300">{error}</p>}

      {weatherData && (
        <div className="flex flex-col md:flex-row gap-6 mt-8 w-full max-w-4xl justify-center">
          <WeatherCard data={weatherData} city={city} />
          <Forecast data={forecast} />
        </div>
      )}
    </div>
  );
}

