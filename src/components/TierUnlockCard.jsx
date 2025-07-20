
import React from 'react';

function TierUnlockCard({ tier, unlocked }) {
  return (
    <div className={`p-4 rounded-xl text-center border-2 ${unlocked ? 'border-green-500 bg-green-950' : 'border-zinc-700 bg-zinc-900'} text-white`}>
      <div className="text-xl mb-2">🏅 Tier {tier} Unlock</div>
      <div className="text-sm">
        {unlocked ? "Access Granted — Your path continues." : "🔒 Locked — Ritual Threshold Not Met."}
      </div>
    </div>
  );
}

export default TierUnlockCard;
