import { useState, useEffect } from 'react';

export default function EchoBleedMonitor() {
  const [bleed, setBleed] = useState("🟢 Contained");

  useEffect(() => {
    const pulse = ["🟢 Contained", "🟡 Weakening", "🔴 Echo Bleed Detected"];
    const timer = setInterval(() => {
      setBleed(pulse[Math.floor(Math.random() * pulse.length)]);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border p-4 rounded-xl shadow bg-pink-50">
      <h2 className="text-xl font-bold mb-2">🩸 Echo Bleed Monitor</h2>
      <p>{bleed}</p>
    </div>
  );
}
