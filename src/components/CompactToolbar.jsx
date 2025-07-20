
import React from 'react';

function CompactToolbar({ children }) {
  return (
    <div className="flex flex-wrap items-center gap-2 p-2 bg-zinc-900 border border-zinc-700 rounded-xl">
      {children}
    </div>
  );
}

export default CompactToolbar;
