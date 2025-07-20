
import React, { useEffect, useState } from 'react';

const dummyLogs = [
  "🧠 Rendar_082 submitted 'Skycoil Blend'",
  "🔥 NodeMonk_777 completed Vaultwyrm burn",
  "🌪 Chaos Button summoned — cooldown active",
  "💾 Vault XP distributed +2.3%",
  "⚔️ Mythic Node unlocked: Leviathan Spark",
];

function LiveFeedLog() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = dummyLogs[Math.floor(Math.random() * dummyLogs.length)];
      setLogs(prev => [newLog, ...prev.slice(0, 9)]);
    }, 3500); // every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black border border-green-500 p-4 rounded-xl max-h-64 overflow-auto text-green-400 font-mono text-sm">
      <div className="mb-2 text-green-300 font-bold">📡 Live Feed of the Core:</div>
      {logs.map((log, index) => (
        <div key={index} className="mb-1">• {log}</div>
      ))}
    </div>
  );
}

export default LiveFeedLog;
