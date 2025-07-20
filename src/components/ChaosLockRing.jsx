import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ChaosLockRing() {
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:7777/chaos/status").then(res => {
      setLocked(res.data.locked);
    });
  }, []);

  return (
    <div className="p-4 rounded bg-gradient-to-r from-red-800 to-zinc-900 text-white text-center border border-red-500 shadow-md">
      <h2 className="text-lg font-bold mb-1">⛓ Chaos Lock Ring</h2>
      <div className={`font-mono text-lg ${locked ? "text-red-400" : "text-green-300"}`}>
        {locked ? "LOCKED" : "UNLOCKED"}
      </div>
      <div className="text-xs italic text-zinc-400 mt-1">
        Ritual flow is {locked ? "frozen." : "active."}
      </div>
    </div>
  );
}
