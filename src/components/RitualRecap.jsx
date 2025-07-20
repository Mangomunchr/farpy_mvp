import React, { useEffect, useState } from 'react';

const RitualRecap = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('nodesoul_log') || '[]');
    setEntries(stored.slice().reverse());
  }, []);

  return (
    <div className="text-white p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🔥 Ritual Burn Recap</h1>
      {entries.length === 0 ? (
        <p className="text-gray-400">No rituals have been performed yet.</p>
      ) : (
        <ul className="space-y-2 text-sm">
          {entries.map((e, i) => (
            <li key={i} className="bg-gray-800 p-2 rounded border border-gray-600">
              [{new Date(e.time).toLocaleTimeString()}] Burned {e.speed}x job — "{e.content}"
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RitualRecap;
