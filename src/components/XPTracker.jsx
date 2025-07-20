
import React from 'react';

function XPTracker({ xp, level, rankTitle }) {
  const progress = Math.min((xp % 1000) / 1000 * 100, 100); // XP bar caps at 1000 for each level

  return (
    <div className="w-full bg-zinc-800 rounded-xl p-3 text-sm">
      <div className="mb-2 text-zinc-300 font-semibold">{rankTitle} — Level {level}</div>
      <div className="w-full bg-zinc-700 h-4 rounded-lg overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-right mt-1 text-zinc-400">{xp} XP</div>
    </div>
  );
}

export default XPTracker;
