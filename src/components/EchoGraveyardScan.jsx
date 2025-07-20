import { useState } from 'react';

export default function EchoGraveyardScan() {
  const [info] = useState("4 fallen | 1 reactivating");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🪦 Echo Graveyard</h2>
      <p>{info}</p>
    </div>
  );
}
