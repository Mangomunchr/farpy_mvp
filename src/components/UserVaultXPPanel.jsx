import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserVaultXPPanel({ id }) {
  const [xp, setXP] = useState(0);
  const [vault, setVault] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:7777/user").then(res => {
      if (res.data[id]) setXP(res.data[id].xp || 0);
    });
    axios.get("http://localhost:7777/vaultcut/claim").then(res => {
      if (res.data?.vaultRemaining >= 0) setVault(res.data.vaultRemaining);
    });
  }, []);

  return (
    <div className="p-4 rounded border bg-gradient-to-br from-black to-zinc-900 text-lime-300 text-sm">
      <h2 className="text-md font-bold mb-1">📊 Vault Metrics</h2>
      <div className="font-mono text-white">
        XP: <span className="text-lime-300">{xp.toLocaleString()}</span>
      </div>
      <div className="font-mono text-white mt-1">
        Vault Remaining: <span className="text-yellow-300">${vault.toLocaleString()}</span>
      </div>
    </div>
  );
}
