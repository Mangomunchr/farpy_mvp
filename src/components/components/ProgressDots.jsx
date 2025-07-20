
import React from 'react';

function ProgressDots({ total = 5, current = 2 }) {
  return (
    <div className="flex space-x-1">
      {[...Array(total)].map((_, i) => (
        <span key={i} className={`h-2 w-2 rounded-full ${i < current ? 'bg-green-400' : 'bg-zinc-600'}`}></span>
      ))}
    </div>
  );
}

export default ProgressDots;
