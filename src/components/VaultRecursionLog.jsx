import { useState } from 'react';

export default function VaultRecursionLog() {
  const [rec] = useState("🔁 Vault cycled 4 times | Memory bleed sealed");

  return (
    <div className="border p-4 rounded-xl shadow bg-amber-100">
      <h2 className="text-xl font-bold mb-2">🔁 Vault Recursion</h2>
      <p>{rec}</p>
    </div>
  );
}
