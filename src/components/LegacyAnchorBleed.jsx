import { useState } from 'react';

export default function LegacyAnchorBleed() {
  const [info] = useState("Leakage: 2.1 imprints/hr");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🪨 Legacy Bleed</h2>
      <p>{info}</p>
    </div>
  );
}
