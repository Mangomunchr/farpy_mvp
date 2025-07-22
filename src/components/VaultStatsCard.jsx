import React from 'react';

export default function VaultStatsCard({ mangoTotal }) {
  return (
    <div className="bg-noxo-dark p-6 rounded-xl border border-noxo-accent w-full">
      <h2 className="text-xl font-bold mb-2">🍑 Mango Stored</h2>
      <p className="text-4xl font-mono text-noxo-primary">${mangoTotal.toFixed(2)}</p>
    </div>
  );
}
