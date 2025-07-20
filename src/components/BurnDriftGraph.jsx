import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BurnDriftGraph() {
  const [burn, setBurn] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://localhost:7777/xptrail/trail");
      const recent = res.data.slice(0, 50).map(e => ({
        time: new Date(e.time).toLocaleTimeString(),
        burn: e.burnPenalty || 0
      }));
      setBurn(recent.reverse());
    };
    fetch();
  }, []);

  return (
    <div className="p-4 border rounded bg-black text-white text-xs">
      <h2 className="text-sm font-bold mb-2 text-red-400">🔥 Burn Drift Graph</h2>
      <div className="overflow-x-auto whitespace-nowrap font-mono">
        {burn.map((b, i) => (
          <span key={i} className="inline-block mr-2">
            <span className={b.burn < -5 ? "text-red-400" : "text-zinc-500"}>{b.burn}</span>
            <span className="block text-zinc-600 text-[10px]">{b.time}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
