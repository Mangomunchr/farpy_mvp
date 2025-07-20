import { useState } from 'react';

export default function VaultAuraScanner() {
  const [aura] = useState("✨ Balanced (Glow: Indigo)");

  return (
    <div className="border p-4 rounded-xl shadow bg-indigo-200">
      <h2 className="text-xl font-bold mb-2">🪷 Vault Aura</h2>
      <p>{aura}</p>
    </div>
  );
}
