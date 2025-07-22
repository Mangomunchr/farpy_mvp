import React from 'react';

export default function MiniStatGrid({ xp, beans, jobs }) {
  return (
    <div className="grid grid-cols-3 gap-4 text-center text-white mt-6">
      <div className="bg-zinc-900 p-4 rounded-lg shadow-inner">
        <div className="text-sm mb-1">🔥 XP</div>
        <div className="text-xl font-bold">{xp}</div>
      </div>
      <div className="bg-zinc-900 p-4 rounded-lg shadow-inner">
        <div className="text-sm mb-1">🫘 CoolBeans</div>
        <div className="text-xl font-bold">{beans}</div>
      </div>
      <div className="bg-zinc-900 p-4 rounded-lg shadow-inner">
        <div className="text-sm mb-1">✅ Jobs</div>
        <div className="text-xl font-bold">{jobs}</div>
      </div>
    </div>
  );
}
