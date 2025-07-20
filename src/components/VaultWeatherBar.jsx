import { useEffect, useState } from 'react';
import axios from 'axios';

export default function VaultWeatherBar() {
  const [weather, setWeather] = useState({ event: 'Unknown' });

  useEffect(() => {
    axios.get("http://localhost:7777/weather/status").then(res => {
      setWeather(res.data);
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-700 to-lime-600 p-2 text-center text-sm font-bold text-white rounded">
      ⛅ Current Vault Weather: <span className="ml-2">{weather.event}</span>
    </div>
  );
}
