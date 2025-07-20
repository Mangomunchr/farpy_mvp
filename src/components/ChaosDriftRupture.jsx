import { useState } from 'react';

export default function ChaosDriftRupture() {
  const [info] = useState("Rift: unstable | cooldown: 33s");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🌪️ Chaos Rupture</h2>
      <p>{info}</p>
    </div>
  );
}
