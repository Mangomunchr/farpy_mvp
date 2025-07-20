import { useState } from 'react';

export default function VaultWeatherConsole() {
  const [weather, setWeather] = useState("🌤️ Clear");

  const cycleWeather = () => {
    const conditions = ["🌤️ Clear", "🌧️ Leak Warning", "🌩️ Mango Storm", "🌫️ Desync Fog"];
    const next = conditions[(conditions.indexOf(weather) + 1) % conditions.length];
    setWeather(next);
  };

  return (
    <div className="border p-4 rounded-xl shadow bg-blue-100">
      <h2 className="text-xl font-bold mb-2">🌦️ Vault Weather Console</h2>
      <p>Current: {weather}</p>
      <button onClick={cycleWeather} className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">
        Cycle Weather
      </button>
    </div>
  );
}
