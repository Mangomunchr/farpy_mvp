import { useState } from 'react';

export default function SanctumFrequencyKey() {
  const [key] = useState("🔐 Freq: 3.08Ω | Sync Stable");

  return (
    <div className="border p-4 rounded-xl shadow bg-blue-100">
      <h2 className="text-xl font-bold mb-2">🔐 Sanctum Freq Key</h2>
      <p>{key}</p>
    </div>
  );
}
