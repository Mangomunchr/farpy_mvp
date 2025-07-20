
import React from 'react';
import { getBurns } from '../utils/burn';

function BurnLogList() {
  const burns = getBurns();
  if (!burns.length) return <p className="text-sm text-zinc-500 italic">No burns yet.</p>;

  return (
    <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-700 space-y-1 text-sm text-white">
      {burns.map((b, i) => (
        <div key={i} className="flex justify-between border-b border-zinc-800 py-1">
          <span>{b.msg}</span>
          <span className="text-green-400">{b.amount} XP</span>
        </div>
      ))}
    </div>
  );
}

export default BurnLogList;
