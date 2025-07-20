import { useState } from 'react';

export default function ChaosAnchorLock() {
  const [info] = useState("Status: volatile");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🧷 Chaos Lock</h2>
      <p>{info}</p>
    </div>
  );
}
