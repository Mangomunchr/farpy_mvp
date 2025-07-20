import { useState } from 'react';

export default function LegendSeedPanel() {
  const [planted, setPlanted] = useState(false);
  const [awakened, setAwakened] = useState(false);

  return (
    <div className="border p-4 rounded-xl shadow bg-amber-100">
      <h2 className="text-xl font-bold mb-2">🌱 Legend Seed</h2>
      <p>Status: {planted ? (awakened ? "🌟 Awakened" : "🪴 Growing") : "🌑 Dormant"}</p>
      {!planted && (
        <button onClick={() => setPlanted(true)} className="mt-2 bg-amber-600 text-white px-4 py-1 rounded">
          Plant Seed
        </button>
      )}
      {planted && !awakened && (
        <button onClick={() => setAwakened(true)} className="mt-2 bg-yellow-700 text-white px-4 py-1 rounded">
          Awaken Legend
        </button>
      )}
    </div>
  );
}
