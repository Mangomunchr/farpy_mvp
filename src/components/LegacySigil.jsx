
import React from 'react';

function LegacySigil({ sigilId, unlocked }) {
  return (
    <div className="text-center border rounded-xl p-3 text-white bg-gradient-to-b from-zinc-800 to-black border-yellow-400">
      <div className="text-xl mb-2">🪙 Legacy Sigil</div>
      <div className={`text-2xl ${unlocked ? 'text-yellow-300' : 'text-zinc-500'}`}>
        {unlocked ? sigilId : "🔒 Locked"}
      </div>
      <div className="mt-1 text-xs text-zinc-400">{unlocked ? "Your Echo is Burned." : "Earned through ritual."}</div>
    </div>
  );
}

export default LegacySigil;
