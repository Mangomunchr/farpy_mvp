import { useState } from 'react';

export default function VaultDissonanceMeter() {
  const [level] = useState("🟠 Mid Dissonance – Echo Conflict");

  return (
    <div className="border p-4 rounded-xl shadow bg-red-50">
      <h2 className="text-xl font-bold mb-2">🎼 Vault Dissonance</h2>
      <p>{level}</p>
    </div>
  );
}
