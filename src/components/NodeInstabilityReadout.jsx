import { useState } from 'react';

export default function NodeInstabilityReadout() {
  const [level] = useState("🟡 Minor Flux");

  return (
    <div className="border p-4 rounded-xl shadow bg-yellow-50">
      <h2 className="text-xl font-bold mb-2">📉 Node Instability</h2>
      <p>{level}</p>
    </div>
  );
}
