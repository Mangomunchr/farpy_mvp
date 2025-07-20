import { useState } from 'react';

export default function ChaosFrostRing() {
  const [status] = useState("🧊 Frost Ring active — Zone 5 frozen");

  return (
    <div className="border p-4 rounded-xl shadow bg-cyan-100">
      <h2 className="text-xl font-bold mb-2">🧊 Chaos Frost Ring</h2>
      <p>{status}</p>
    </div>
  );
}
