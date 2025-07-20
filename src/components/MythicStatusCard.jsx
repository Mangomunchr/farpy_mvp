
import React from 'react';

function MythicStatusCard({ title, symbol, status, auraColor }) {
  return (
    <div className={`p-4 rounded-xl border-2 ${auraColor} text-white bg-black`}>
      <div className="text-xl font-bold">{symbol} {title}</div>
      <div className="mt-2 text-sm text-zinc-400">Status: <span className="text-white">{status}</span></div>
    </div>
  );
}

export default MythicStatusCard;
