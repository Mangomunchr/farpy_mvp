import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserStatusCard({ id }) {
  const [xp, setXP] = useState(0);

  useEffect(() => {
    const fetchXP = async () => {
      const res = await axios.get("http://localhost:7777/user");
      if (res.data[id]) setXP(res.data[id].xp || 0);
    };
    fetchXP();
  }, []);

  return (
    <div className="p-4 border rounded bg-zinc-900 text-lime-300">
      <h2 className="text-lg font-bold">🧍 User ID: <span className="text-white">{id}</span></h2>
      <p className="font-mono text-sm">Vault XP: {xp.toLocaleString()}</p>
    </div>
  );
}
