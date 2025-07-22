import React from 'react';

export default function XPStatsCard({ xp = 0 }) {
  return (
    <div className="bg-noxo-dark text-white rounded-xl p-4 shadow-md border border-noxo-primary w-full max-w-xs">
      <div className="text-xl font-bold mb-2">🔥 XP</div>
      <div className="text-3xl">{xp.toLocaleString()} XP</div>
    </div>
  );
}
