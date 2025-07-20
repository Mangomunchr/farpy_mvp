
import React from 'react';

function InlineStat({ label, value }) {
  return (
    <div className="flex justify-between text-sm text-zinc-300">
      <span>{label}</span>
      <span className="font-bold text-white">{value}</span>
    </div>
  );
}

export default InlineStat;
