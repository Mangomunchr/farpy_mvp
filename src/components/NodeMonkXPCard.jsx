
import React from 'react';

function NodeMonkXPCard({ xp }) {
  return (
    <div className="text-center border border-green-600 p-4 bg-black rounded-xl text-white">
      <div className="text-xs text-zinc-400 mb-1">Node XP</div>
      <div className="text-3xl font-bold text-green-400">{xp}</div>
    </div>
  );
}

export default NodeMonkXPCard;
