export function getBackgroundClass(weatherData) {
  if (!weatherData) return "bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600";

  const { temperature, humidity, windSpeed } = weatherData;

  // Example logic: adjust background by temperature
  if (temperature > 30) return "bg-gradient-to-br from-orange-400 to-red-600"; // hot
  if (temperature < 15) return "bg-gradient-to-br from-blue-500 to-indigo-700"; // cold
  if (humidity > 80) return "bg-gradient-to-br from-gray-500 to-blue-800"; // rainy/moist
  if (windSpeed > 20) return "bg-gradient-to-br from-cyan-500 to-blue-600"; // windy

  // Default pleasant weather
  return "bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600";
}