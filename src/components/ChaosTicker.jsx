import React from 'react';

const ChaosTicker = ({ log = [] }) => (
  <div className="bg-pink-800 text-white text-xs p-2 rounded overflow-y-scroll max-h-32 space-y-1">
    {log.map((entry, i) => (
      <div key={i}>⚡ {entry}</div>
    ))}
  </div>
);

export default ChaosTicker;
