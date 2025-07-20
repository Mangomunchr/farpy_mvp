import { useState } from 'react';

export default function EconomyLoopStatus() {
  const [pressure] = useState("Stable");

  return (
    <div className="border p-4 rounded-xl shadow bg-emerald-100">
      <h2 className="text-xl font-bold mb-2">💹 Vault Economy Loop</h2>
      <p>Loop Pressure: {pressure}</p>
    </div>
  );
}
