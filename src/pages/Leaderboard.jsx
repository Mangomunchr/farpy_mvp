import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Placeholder: pretend we're fetching leaderboard from backend
    const data = [
      { name: "MonkOne", xp: 1250 },
      { name: "RenderZ", xp: 1000 },
      { name: "GlowKid", xp: 750 },
    ];
    setEntries(data);
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-4">🏆 Leaderboard</h1>
      <ul className="space-y-2">
        {entries.map((entry, i) => (
          <li key={i} className="bg-gray-800 p-3 rounded flex justify-between border border-gray-700">
            <span>{i + 1}. {entry.name}</span>
            <span>{entry.xp} XP</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
