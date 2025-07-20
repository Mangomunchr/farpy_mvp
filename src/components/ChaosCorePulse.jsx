import { useState } from 'react';

export default function ChaosCorePulse() {
  const [pulse] = useState("⚡ Intensity Surge | Core unstable");

  return (
    <div className="border p-4 rounded-xl shadow bg-pink-200">
      <h2 className="text-xl font-bold mb-2">⚠️ Chaos Core Pulse</h2>
      <p>{pulse}</p>
    </div>
  );
}
