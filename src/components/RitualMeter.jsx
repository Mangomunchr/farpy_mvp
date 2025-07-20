
import React from 'react';

function RitualMeter({ burnRate, chaosLevel }) {
  const burnColor = burnRate > 70 ? "bg-red-600" : burnRate > 40 ? "bg-yellow-500" : "bg-green-500";

  return (
    <div className="bg-zinc-900 p-4 rounded-xl text-sm">
      <div className="text-zinc-300 font-semibold mb-2">🔥 Ritual Burn Meter</div>
      <div className="w-full bg-zinc-700 h-3 rounded-full overflow-hidden mb-1">
        <div
          className={`h-full ${burnColor}`}
          style={{ width: `${burnRate}%` }}
        />
      </div>
      <div className="text-zinc-400 mb-2">Burn Rate: {burnRate}%</div>
      <div className="text-blue-400">Chaos Level: {chaosLevel}</div>
    </div>
  );
}

export default RitualMeter;
