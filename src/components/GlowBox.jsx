
import React from 'react';

function GlowBox({ children }) {
  return (
    <div className="p-4 rounded-xl bg-zinc-900 border border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.4)]">
      {children}
    </div>
  );
}

export default GlowBox;
