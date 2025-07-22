import React from 'react';

export default function ChaosStatusBar({ isChaosActive = false }) {
  return (
    <div className={`mt-4 text-sm text-center px-4 py-2 rounded-lg ${isChaosActive ? 'bg-red-700 text-white' : 'bg-gray-800 text-gray-300'}`}>
      {isChaosActive ? '🔥 CHAOS MODE ACTIVE – Vault multipliers are live' : '💤 Chaos dormant – All is stable in the grid'}
    </div>
  );
}
