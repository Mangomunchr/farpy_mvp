import { useState } from 'react';

export default function VaultPulseArray() {
  const [info] = useState("Signals: 12 | Active: 9");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">📶 Pulse Array</h2>
      <p>{info}</p>
    </div>
  );
}
