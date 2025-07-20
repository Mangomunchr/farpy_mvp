
import React from 'react';

const mockRanks = [
  { rank: 1, name: "NodeMonk_Alpha", xp: 5230 },
  { rank: 2, name: "NodeMonk_777", xp: 4890 },
  { rank: 3, name: "NodeMonk_Mango", xp: 4700 },
];

function NodeRankPanel() {
  return (
    <div className="bg-zinc-900 p-4 rounded-xl text-sm border border-zinc-700">
      <div className="text-zinc-200 font-bold mb-2">🏆 Top NodeMonks</div>
      <ul>
        {mockRanks.map((monk, i) => (
          <li key={i} className="flex justify-between text-zinc-400 mb-1">
            <span>{monk.rank}. {monk.name}</span>
            <span>{monk.xp} XP</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NodeRankPanel;
