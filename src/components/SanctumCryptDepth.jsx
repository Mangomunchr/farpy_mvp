import { useState } from 'react';

export default function SanctumCryptDepth() {
  const [depth] = useState("⚰️ Depth Layer: 6 — Echo Residue Present");

  return (
    <div className="border p-4 rounded-xl shadow bg-stone-100">
      <h2 className="text-xl font-bold mb-2">⚰️ Sanctum Crypt</h2>
      <p>{depth}</p>
    </div>
  );
}
