import React from 'react';

export default function MangoPoolMeter({ mangoTotal }) {
  const percent = Math.min((mangoTotal / 20000) * 100, 100);
  return (
    <div className="w-full bg-gray-800 p-6 rounded-xl border border-noxo-accent">
      <h2 className="text-xl font-bold mb-2">🍹 Vault Fill</h2>
      <div className="w-full bg-gray-700 h-6 rounded-full overflow-hidden">
        <div className="bg-noxo-primary h-6" style={{ width: `${percent}%` }} />
      </div>
      <p className="text-sm mt-2">{percent.toFixed(1)}% full</p>
    </div>
  );
}
