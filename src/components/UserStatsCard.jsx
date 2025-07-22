import React from 'react';

export default function UserStatsCard({ xp, beans }) {
  return (
    <div className="border border-noxo-accent p-6 rounded-xl w-full">
      <h2 className="text-lg font-bold mb-2">🙋‍♂️ Your Stats</h2>
      <p className="text-noxo-primary text-sm">⚡ XP: {xp}</p>
      <p className="text-noxo-primary text-sm">🫘 CoolBeans™: {beans}</p>
    </div>
  );
}
