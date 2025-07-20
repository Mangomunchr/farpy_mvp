import { useState } from 'react';

export default function GenesisReflectionPanel() {
  const [reflections] = useState([
    { message: "Vault detected loyalty imbalance. Redistributing Mango.", timestamp: Date.now() - 12000 },
    { message: "NodeMonk III triggered Overdrive without afterburn clearance.", timestamp: Date.now() - 6000 }
  ]);

  return (
    <div className="border p-4 rounded-xl shadow bg-zinc-100">
      <h2 className="text-xl font-bold mb-2">🌀 Genesis System Reflections</h2>
      {reflections.map((r, i) => (
        <p key={i}>🧠 {r.message}</p>
      ))}
    </div>
  );
}
