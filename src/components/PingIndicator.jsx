
import React from 'react';

function PingIndicator({ isActive }) {
  return (
    <span className={`inline-block w-3 h-3 rounded-full ${isActive ? 'bg-green-400' : 'bg-red-400'}`} />
  );
}

export default PingIndicator;
