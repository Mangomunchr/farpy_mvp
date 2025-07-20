import { useEffect, useState } from 'react';
import axios from 'axios';

export default function RitualHeatmapPanel() {
  const [freq, setFreq] = useState({});

  useEffect(() => {
    axios.get("http://localhost:7777/xptrail/trail").then(res => {
      const bins = {};
      res.data.forEach(e => {
        const date = new Date(e.time);
        const hour = date.getHours();
        bins[hour] = (bins[hour] || 0) + 1;
      });
      setFreq(bins);
    });
  }, []);

  return (
    <div className="p-4 border rounded bg-zinc-900 text-white text-xs">
      <h2 className="text-sm font-bold mb-2 text-red-300">📊 Ritual Frequency Heatmap</h2>
      <div className="grid grid-cols-6 gap-1 text-center font-mono">
        {Array.from({ length: 24 }).map((_, h) => {
          const count = freq[h] || 0;
          const level = count > 20 ? 'bg-red-600'
                       : count > 10 ? 'bg-orange-500'
                       : count > 5  ? 'bg-yellow-400'
                       : count > 0  ? 'bg-lime-400'
                       : 'bg-zinc-800';
          return (
            <div key={h} className={`p-2 rounded ${level}`}>
              {h}:00
              <div className="text-zinc-900">{count}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
