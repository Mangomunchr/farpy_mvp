import { useState } from 'react';

export default function VaultClarityLens() {
  const [info] = useState("Focus: 96.6% | Alignment good");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🔍 Clarity Lens</h2>
      <p>{info}</p>
    </div>
  );
}
