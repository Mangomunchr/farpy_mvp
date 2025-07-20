
import React from 'react';

function ConnectionStatusIndicator({ online }) {
  return (
    <div className={`text-xs text-center px-3 py-1 rounded-full font-semibold ${
      online ? 'bg-green-700 text-green-100' : 'bg-red-700 text-red-100'
    }`}>
      {online ? '🟢 Connected to Core' : '🔴 Disconnected'}
    </div>
  );
}

export default ConnectionStatusIndicator;
