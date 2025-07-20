import { useState } from 'react';

export default function UnlockChainStatus() {
  const [chain] = useState([
    "🔓 Memory Core Unsealed",
    "🧬 Mutation Sync Initialized",
    "⚡ Chaos Drift Loop Active",
    "⛩️ Vault Stabilizer: Armed"
  ]);

  return (
    <div className="p-4 border rounded bg-zinc-900 text-white">
      <h2 className="text-xl font-bold mb-2">🧷 Unlock Chain</h2>
      <ol className="list-decimal pl-4 space-y-1">
        {chain.map((step, i) => <li key={i}>{step}</li>)}
      </ol>
    </div>
  );
}
