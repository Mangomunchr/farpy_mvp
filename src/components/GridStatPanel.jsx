
import React from 'react';

function GridStatPanel({ items }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {items.map((item, idx) => (
        <div key={idx} className="bg-zinc-800 p-3 rounded-lg text-sm border border-zinc-700 text-white">
          <div className="text-zinc-400">{item.label}</div>
          <div className="text-white text-lg font-bold">{item.value}</div>
        </div>
      ))}
    </div>
  );
}

export default GridStatPanel;
