
import React from 'react';

function FloatingInfoBox({ content }) {
  return (
    <div className="fixed top-4 right-4 bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-white text-sm z-50 shadow-xl">
      {content}
    </div>
  );
}

export default FloatingInfoBox;
