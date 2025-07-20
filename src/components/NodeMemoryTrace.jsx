import { useState } from 'react';

export default function NodeMemoryTrace() {
  const [trace] = useState("🧬 Rituals: 42 | Trials: 3 | Fractures: 1");

  return (
    <div className="border p-4 rounded-xl shadow bg-slate-100">
      <h2 className="text-xl font-bold mb-2">🧠 Node Memory Trace</h2>
      <p>{trace}</p>
    </div>
  );
}
