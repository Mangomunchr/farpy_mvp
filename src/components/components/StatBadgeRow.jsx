
import React from 'react';

function StatBadgeRow({ stats }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stats.map((s, i) => (
        <div key={i} className="bg-zinc-800 text-white px-3 py-1 rounded-lg text-xs font-semibold border border-zinc-600">
          {s}
        </div>
      ))}
    </div>
  );
}

export default StatBadgeRow;
