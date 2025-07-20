
import React from 'react';

function PercentChangeLabel({ value }) {
  const color = value > 0 ? 'text-green-400' : value < 0 ? 'text-red-400' : 'text-zinc-400';
  const symbol = value > 0 ? '+' : '';
  return (
    <span className={`text-sm font-semibold ${color}`}>
      {symbol}{value}%
    </span>
  );
}

export default PercentChangeLabel;
