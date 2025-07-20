import { useState, useEffect } from 'react';

export default function MangoMemoryPulse() {
  const [pulse, setPulse] = useState("🧠 Initializing...");

  useEffect(() => {
    const interval = setInterval(() => {
      const pulses = ["🔸 Memory spike detected", "🔹 Vault echo heard", "🔸 Soul trace saved"];
      setPulse(pulses[Math.floor(Math.random() * pulses.length)]);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border p-4 rounded-xl shadow bg-amber-200">
      <h2 className="text-xl font-bold mb-2">🧬 Mango Memory Pulse</h2>
      <p>{pulse}</p>
    </div>
  );
}
