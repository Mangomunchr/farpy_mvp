import { useState } from 'react';

export default function ChaosPathPulse() {
  const [pulse] = useState("🩸 Path instability: 6.6 | Vibe volatile");

  return (
    <div className="border p-4 rounded-xl shadow bg-pink-200">
      <h2 className="text-xl font-bold mb-2">🩸 Chaos Path Pulse</h2>
      <p>{pulse}</p>
    </div>
  );
}
