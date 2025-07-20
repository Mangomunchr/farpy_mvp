import { useState } from 'react';

export default function EchoDecayIndex() {
  const [decay] = useState("📉 Decay Index: 7.14");

  return (
    <div className="border p-4 rounded-xl shadow bg-slate-100">
      <h2 className="text-xl font-bold mb-2">📉 Echo Decay</h2>
      <p>{decay}</p>
    </div>
  );
}
