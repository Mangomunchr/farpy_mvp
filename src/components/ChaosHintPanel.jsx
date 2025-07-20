import { useState } from 'react';

export default function ChaosHintPanel() {
  const [hint] = useState("A Vault storm is brewing. Sync will falter.");

  return (
    <div className="border p-4 rounded-xl shadow bg-red-100">
      <h2 className="text-xl font-bold mb-2">🌪️ Chaos Warning</h2>
      <p>{hint}</p>
    </div>
  );
}
