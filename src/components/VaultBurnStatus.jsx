import { useEffect, useState } from 'react';
import axios from 'axios';

export default function VaultBurnStatus() {
  const [burn, setBurn] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:7777/burn/status").then(res => {
      setBurn(res.data.burn);
    });
  }, []);

  const color =
    burn > 70 ? "bg-red-600"
    : burn > 40 ? "bg-yellow-500"
    : "bg-green-500";

  return (
    <div className="p-4 border rounded bg-zinc-900 text-white">
      <h2 className="text-sm font-bold mb-1 text-orange-400">🔥 Vault Burn Level</h2>
      <div className="w-full bg-zinc-800 rounded h-4">
        <div
          className={`${color} h-4 rounded transition-all`}
          style={{ width: `${burn}%` }}
        />
      </div>
      <div className="text-xs mt-1 font-mono text-zinc-400">
        Current Drift: <span className="text-white">{burn}%</span>
      </div>
    </div>
  );
}
