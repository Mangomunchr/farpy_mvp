import { useState, useEffect } from 'react';

export default function VaultPulseIntensity() {
  const [intensity, setIntensity] = useState("🟡 Moderate");

  useEffect(() => {
    const t = setInterval(() => {
      const values = ["🟢 Calm", "🟡 Moderate", "🔴 Surge"];
      setIntensity(values[Math.floor(Math.random() * values.length)]);
    }, 10000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="border p-4 rounded-xl shadow bg-amber-50">
      <h2 className="text-xl font-bold mb-2">📶 Vault Pulse</h2>
      <p>Intensity: {intensity}</p>
    </div>
  );
}
