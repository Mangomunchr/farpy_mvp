
import React from 'react';

function StatBar({ label, percent }) {
  return (
    <div className="text-sm mb-2">
      <div className="flex justify-between text-zinc-300">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="w-full bg-zinc-700 h-2 rounded-full overflow-hidden">
        <div className="bg-green-500 h-full" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}

export default StatBar;
