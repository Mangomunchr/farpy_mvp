import { useState } from 'react';

export default function NodeSoulViewer() {
  const [events] = useState([
    { event: "Claimed Render Job A", timestamp: Date.now() - 10000 },
    { event: "Blessed Vault +12", timestamp: Date.now() - 5000 }
  ]);

  return (
    <div className="border p-4 rounded-xl shadow bg-indigo-100">
      <h2 className="text-xl font-bold mb-2">🧬 NodeSoul Imprint</h2>
      {events.map((e, i) => (
        <p key={i}>🪶 {e.event}</p>
      ))}
    </div>
  );
}
