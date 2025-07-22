import React from 'react';

export default function ReferralTrackerPanel({ invites = 0, bonusXP = 0 }) {
  return (
    <div className="bg-zinc-900 text-white border border-yellow-500 rounded-xl p-4 w-full max-w-md mx-auto mt-6">
      <h2 className="text-lg font-bold mb-2">🎁 Referral Rewards</h2>
      <p>Invites: <span className="font-bold text-green-300">{invites}</span></p>
      <p>Bonus XP: <span className="font-bold text-orange-400">{bonusXP}</span></p>
    </div>
  );
}
