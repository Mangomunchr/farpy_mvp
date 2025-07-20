import { useState, useEffect } from 'react';

export default function BurnResonanceMeter() {
  const [level, setLevel] = useState("🟢 Low");

  useEffect(() => {
    const levels = ["🟢 Low", "🟡 Moderate", "🔴 High"];
    const interval = setInterval(() => {
      setLevel(levels[Math.floor(Math.random() * levels.length)]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border p-4 rounded-xl shadow bg-red-50">
      <h2 className="text-xl font-bold mb-2">🔥 Burn Resonance</h2>
      <p>{level}</p>
    </div>
  );
}
