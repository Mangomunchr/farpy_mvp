
import React from 'react';

function ScrollPanel({ children }) {
  return (
    <div className="max-h-60 overflow-y-auto p-2 bg-zinc-900 rounded-xl border border-zinc-700">
      {children}
    </div>
  );
}

export default ScrollPanel;
