import { useState } from 'react';

export default function SanctumRiftPressurePanel() {
  const [pressure] = useState("🟠 Widening – Maintain Ritual Balance");

  return (
    <div className="border p-4 rounded-xl shadow bg-indigo-50">
      <h2 className="text-xl font-bold mb-2">🌀 Sanctum Rift Pressure</h2>
      <p>{pressure}</p>
    </div>
  );
}
