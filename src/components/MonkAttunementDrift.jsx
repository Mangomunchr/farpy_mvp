import { useState } from 'react';

export default function MonkAttunementDrift() {
  const [drift] = useState("📡 Drift offset: 2.4° from Origin");

  return (
    <div className="border p-4 rounded-xl shadow bg-lime-200">
      <h2 className="text-xl font-bold mb-2">📡 Attunement Drift</h2>
      <p>{drift}</p>
    </div>
  );
}
