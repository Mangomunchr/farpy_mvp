import React, { useEffect, useState } from 'react';

const NodeSoul = () => {
  const [soulLog, setSoulLog] = useState([]);

  useEffect(() => {
    const log = JSON.parse(localStorage.getItem('nodesoul_log') || '[]');
    setSoulLog(log);
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4">🧬 NodeSoul Imprint</h1>
      {soulLog.length === 0 ? (
        <p className="text-gray-400">No rituals recorded yet.</p>
      ) : (
        <ul className="space-y-2 text-sm">
          {soulLog.map((entry, i) => (
            <li key={i} className="bg-gray-800 p-2 rounded border border-gray-700">
              [{new Date(entry.time).toLocaleTimeString()}] Burned {entry.speed}x job — "{entry.content}"
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NodeSoul;
