export default async function fetchWeatherData(city) {
  const geoRes = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
  );
  const geoData = await geoRes.json();

  if (!geoData.results || geoData.results.length === 0) {
    throw new Error("City not found");
  }

  const { latitude, longitude } = geoData.results[0];

  const weatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,weather_code&forecast_days=5&timezone=auto`
  );
  const weatherData = await weatherRes.json();

  return {
  current: {
    temperature: weatherData.current.temperature_2m,
    humidity: weatherData.current.relative_humidity_2m,
    windSpeed: weatherData.current.wind_speed_10m,
    weatherCode: weatherData.current.weather_code,
  },
  forecast: weatherData.daily.time.map((date, i) => ({
    date,
    temp: weatherData.daily.temperature_2m_max[i],
    weatherCode: weatherData.daily.weather_code[i],
  })),
 };
}
