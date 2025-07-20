
import React from 'react';

function ChaosBannerSignal({ phase }) {
  const phases = {
    "resting": "⚫ The Vault is silent...",
    "charging": "🌀 Chaos rising. The glyphs tremble.",
    "active": "🔥 CHAOS LIVE — Systems unstable, rituals active!"
  };

  return (
    <div className="text-center text-sm p-2 bg-black border rounded-xl shadow-md text-white border-red-500">
      {phases[phase] || "⚠️ Unknown chaos phase."}
    </div>
  );
}

export default ChaosBannerSignal;
