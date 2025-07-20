import { useState } from 'react';

export default function MemoryRebirthPanel() {
  const [rebirth] = useState("🧬 Cycle 2 | Echo retained");

  return (
    <div className="border p-4 rounded-xl shadow bg-lime-50">
      <h2 className="text-xl font-bold mb-2">♻️ Memory Rebirth</h2>
      <p>{rebirth}</p>
    </div>
  );
}
