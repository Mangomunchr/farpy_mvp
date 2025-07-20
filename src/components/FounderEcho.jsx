
import React from 'react';

function FounderEcho({ message }) {
  return (
    <div className="bg-gradient-to-tr from-amber-900 to-zinc-900 p-3 rounded-xl text-xs text-yellow-300 italic border border-amber-400">
      🗣 Founder Echo: “{message}”
    </div>
  );
}

export default FounderEcho;
