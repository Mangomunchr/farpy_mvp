
import React from 'react';

function MissionObjectiveCard({ title, progress }) {
  return (
    <div className="p-4 rounded-xl bg-zinc-800 text-white border border-zinc-700 text-sm">
      <div className="font-semibold mb-1">📜 Mission: {title}</div>
      <div className="w-full bg-zinc-600 h-2 rounded-full overflow-hidden">
        <div
          className="bg-green-500 h-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-right text-xs text-zinc-400 mt-1">{progress}% complete</div>
    </div>
  );
}

export default MissionObjectiveCard;
