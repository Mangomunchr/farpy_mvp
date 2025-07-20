import { useState } from 'react';

export default function VaultFlickerWatcher() {
  const [seen] = useState("👁️ Flicker Pattern #007");

  return (
    <div className="border p-4 rounded-xl shadow bg-pink-200">
      <h2 className="text-xl font-bold mb-2">🎞️ Vault Flicker</h2>
      <p>{seen}</p>
    </div>
  );
}
