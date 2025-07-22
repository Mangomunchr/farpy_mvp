
import React from 'react';

function HighlightBox({ children }) {
  return (
    <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-xl p-4 shadow-md">
      {children}
    </div>
  );
}

export default HighlightBox;
