import { useState } from 'react';

export default function VaultLuminanceMeter() {
  const [glow] = useState("✨ 37.2 Lux – Harmony Level: Medium");

  return (
    <div className="border p-4 rounded-xl shadow bg-yellow-100">
      <h2 className="text-xl font-bold mb-2">🔆 Vault Luminance</h2>
      <p>{glow}</p>
    </div>
  );
}
