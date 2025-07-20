import { useEffect, useState } from 'react';
import axios from 'axios';

export default function XPStreakTrailPanel() {
  const [trail, setTrail] = useState([]);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:7777/xptrail/trail").then(res => {
      const recent = res.data.slice(0, 20);
      setTrail(recent);

      // crude streak calc for same user
      if (recent.length > 1) {
        const baseId = recent[0].user;
        const s = recent.filter(e => e.user === baseId).length;
        setStreak(s);
      }
    });
  }, []);

  return (
    <div className="p-4 border rounded bg-zinc-950 text-white text-xs">
      <h2 className="text-sm font-bold mb-2 text-purple-300">⚡ XP Trail Feed</h2>
      <div className="text-zinc-400 font-mono mb-1">
        🔥 Ritual Streak: <span className="text-yellow-300">{streak}</span>
      </div>
      <div className="max-h-40 overflow-y-auto space-y-1">
        {trail.map((t, i) => (
          <div key={i} className="text-zinc-300">
            ⏱ {new Date(t.time).toLocaleTimeString()} — <span className="text-white">{t.user}</span> +{t.gained} XP
          </div>
        ))}
      </div>
    </div>
  );
}
