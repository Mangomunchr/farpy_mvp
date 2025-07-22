import React from 'react';

const ChaosBurnEcho = ({ log }) => (
  <div className="text-xs text-pink-500 font-mono max-h-24 overflow-y-auto mt-2 space-y-1">
    {log.map((line, i) => (
      <div key={i}>🔥 {line}</div>
    ))}
  </div>
);

export default ChaosBurnEcho;
