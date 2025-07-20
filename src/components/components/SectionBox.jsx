
import React from 'react';

function SectionBox({ title, children }) {
  return (
    <div className="p-4 bg-zinc-800 rounded-xl border border-zinc-700">
      <h3 className="text-zinc-300 font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}

export default SectionBox;
