
import React from 'react';

function VaultChargeBar({ charge }) {
  return (
    <div className="bg-zinc-800 border border-zinc-700 p-2 rounded-lg text-white text-sm">
      <div className="flex justify-between mb-1">
        <span>Charge</span>
        <span>{charge}/100</span>
      </div>
      <div className="w-full bg-zinc-700 h-2 rounded-full overflow-hidden">
        <div className="bg-green-500 h-full" style={{ width: `${charge}%` }} />
      </div>
    </div>
  );
}

export default VaultChargeBar;
