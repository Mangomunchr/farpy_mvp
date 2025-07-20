import { useState } from 'react';

export default function MangoWeatherForecast() {
  const [forecast] = useState(["🌤️ Clear", "🌧️ Storm", "🌫️ Fog"]);

  return (
    <div className="border p-4 rounded-xl shadow bg-cyan-100">
      <h2 className="text-xl font-bold mb-2">📡 Mango Weather Forecast</h2>
      <ul>
        {forecast.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}
