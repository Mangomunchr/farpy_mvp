
import React from 'react';

function MiniStatCard({ label, value }) {
  return (
    <div className="bg-zinc-800 p-3 rounded-lg text-sm text-white border border-zinc-600">
      <div className="text-zinc-400">{label}</div>
      <div className="font-bold text-lg">{value}</div>
    </div>
  );
}

export default MiniStatCard;
