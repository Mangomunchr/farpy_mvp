import { useState } from 'react';
import { getMangoWeather } from '../../shared/mangoWeather';

export default function MangoWeather() {
  const [weather, setWeather] = useState(getMangoWeather());

  return (
    <div className="border p-4 rounded-xl shadow bg-yellow-50">
      <h2 className="text-xl font-bold mb-2">☁️ Mango Weather</h2>
      <p>{weather}</p>
      <button onClick={() => setWeather(getMangoWeather())} className="mt-2 bg-yellow-400 px-3 py-1 rounded">
        Refresh Forecast
      </button>
    </div>
  );
}
