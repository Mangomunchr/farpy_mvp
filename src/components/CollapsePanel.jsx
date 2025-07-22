
import React, { useState } from 'react';

function CollapsePanel({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-zinc-700 rounded-xl">
      <button onClick={() => setOpen(!open)} className="w-full text-left p-3 text-white bg-zinc-800 rounded-t-xl">
        {title}
      </button>
      {open && <div className="p-4 text-sm text-white bg-zinc-900">{children}</div>}
    </div>
  );
}

export default CollapsePanel;
