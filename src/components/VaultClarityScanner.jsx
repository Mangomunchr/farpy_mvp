import { useState } from 'react';

export default function VaultClarityScanner() {
  const [clarity] = useState("🔍 Signal Noise: Low");

  return (
    <div className="border p-4 rounded-xl shadow bg-sky-100">
      <h2 className="text-xl font-bold mb-2">🧿 Vault Clarity</h2>
      <p>{clarity}</p>
    </div>
  );
}
