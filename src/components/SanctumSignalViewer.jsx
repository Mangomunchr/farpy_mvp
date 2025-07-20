import { useState } from 'react';

export default function SanctumSignalViewer() {
  const [signals] = useState(["🕊️ Trial Pending", "🔥 Chaos Warning", "🪙 Vault Echo"]);

  return (
    <div className="border p-4 rounded-xl shadow bg-violet-100">
      <h2 className="text-xl font-bold mb-2">📶 Sanctum Signals</h2>
      <ul>
        {signals.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  );
}
