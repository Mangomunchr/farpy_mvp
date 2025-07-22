import React from 'react';

export default function XPRewardCallout({ reward = 0, reason = "achievement unlocked" }) {
  return (
    <div className="bg-noxo-dark text-white px-4 py-2 rounded-lg shadow-md border border-noxo-primary my-4">
      <p className="text-sm">✨ You earned <span className="text-orange-300 font-bold">{reward} XP</span> – {reason}</p>
    </div>
  );
}
