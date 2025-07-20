
import React from 'react';

function TooltipWrapper({ text, children }) {
  return (
    <div className="relative group inline-block">
      {children}
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-zinc-700 text-white text-xs px-2 py-1 rounded shadow-lg z-10">
        {text}
      </div>
    </div>
  );
}

export default TooltipWrapper;
