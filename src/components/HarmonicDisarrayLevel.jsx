import { useState } from 'react';

export default function HarmonicDisarrayLevel() {
  const [level] = useState("🎷 Dissonance Flux: 3.7");

  return (
    <div className="border p-4 rounded-xl shadow bg-violet-100">
      <h2 className="text-xl font-bold mb-2">🎷 Harmonic Disarray</h2>
      <p>{level}</p>
    </div>
  );
}
