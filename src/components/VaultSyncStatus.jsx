import { useState, useEffect } from 'react';

export default function VaultSyncStatus() {
  const [synced, setSynced] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setSynced(Math.random() > 0.1);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="border p-4 rounded-xl shadow bg-sky-100">
      <h2 className="text-xl font-bold mb-2">🔄 Vault Sync</h2>
      <p>Status: {synced ? "🟢 Synced" : "🔴 Desynced"}</p>
    </div>
  );
}
