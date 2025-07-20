import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MangoWeatherOverlay() {
  const [event, setEvent] = useState("Unknown");

  useEffect(() => {
    axios.get("http://localhost:7777/weather/status").then(res => {
      setEvent(res.data.event || "Unknown");
    });
  }, []);

  const color =
    event.includes("Mango") ? "bg-yellow-300 text-black"
    : event.includes("Chaos") ? "bg-pink-500 text-white"
    : "bg-zinc-700 text-white";

  return (
    <div className={`text-xs font-bold px-2 py-1 rounded ${color} inline-block`}>
      ⛅ {event}
    </div>
  );
}
