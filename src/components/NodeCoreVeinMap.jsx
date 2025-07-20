import { useState } from 'react';

export default function NodeCoreVeinMap() {
  const [info] = useState("Node root path: stabilized");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🧭 Vein Map</h2>
      <p>{info}</p>
    </div>
  );
}
