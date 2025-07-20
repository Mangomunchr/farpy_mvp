import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useVaultWeather() {
  const [weather, setWeather] = useState("...");

  const fetch = async () => {
    const res = await axios.get('http://localhost:7777/weather/status');
    setWeather(res.data.event);
  };

  useEffect(() => {
    fetch();
  }, []);

  return { weather, fetch };
}
