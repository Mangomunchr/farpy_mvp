import { useState } from 'react';

export default function VaultSignalLog() {
  const [logs] = useState([
    "🔔 Vault ping received from NodeMonk XIV",
    "📡 Summon Burst echoed by MangoRift",
    "🕯️ Signal distorted by Chaos Drift"
  ]);

  return (
    <div className="border p-4 rounded-xl shadow bg-zinc-200">
      <h2 className="text-xl font-bold mb-2">📜 Vault Signal Log</h2>
      <ul>
        {logs.map((l, i) => <li key={i}>{l}</li>)}
      </ul>
    </div>
  );
}
