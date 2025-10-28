export default function Forecast({ data }) {
  return (
    <div className="glass text-white p-6 w-full max-w-4xl mt-6 animate-fadeIn">
      <h3 className="text-2xl font-semibold mb-4">Next 5 Days</h3>

      <div className="flex overflow-x-auto space-x-4 pb-2">
        {data.map((day, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white/10 rounded-xl p-4 min-w-[100px] shadow-md"
          >
            <p className="font-medium">{new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}</p>
            <p className="text-xl font-bold mt-1">{day.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

