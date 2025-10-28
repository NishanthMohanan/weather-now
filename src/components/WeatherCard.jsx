export default function WeatherCard({ data, city }) {
  return (
    <div className="glass text-white p-8 w-full max-w-md text-center animate-fadeIn">
      <h2 className="text-3xl font-bold mb-2 drop-shadow-lg">{city}</h2>
      <p className="text-6xl font-extrabold mb-4">{data.temperature}°C</p>
      <p className="text-lg mb-2 capitalize">{data.description || "Clear Sky"}</p>

      <div className="flex justify-around text-sm opacity-90 mt-4">
        <div>
          <p className="font-semibold">Humidity</p>
          <p>{data.humidity}%</p>
        </div>
        <div>
          <p className="font-semibold">Wind</p>
          <p>{data.windSpeed} km/h</p>
        </div>
        <div>
          <p className="font-semibold">Feels Like</p>
          <p>{data.feelsLike || data.temperature}°C</p>
        </div>
      </div>
    </div>
  );
}

