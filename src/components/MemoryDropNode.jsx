import { useState } from 'react';

export default function MemoryDropNode() {
  const [info] = useState("Node_07 saved snapshot");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">💾 Memory Drop</h2>
      <p>{info}</p>
    </div>
  );
}
