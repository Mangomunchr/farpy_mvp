import { useState } from 'react';

export default function SummonModeControl() {
  const [tier, setTier] = useState(1);

  return (
    <div className="p-4 border rounded bg-black text-white shadow-inner text-center">
      <h2 className="text-lg font-bold text-purple-300 mb-2">⚡ Summon Tier</h2>
      <p className="mb-2 text-sm text-zinc-300 font-mono">Current: {tier}x</p>
      <div className="flex justify-center space-x-2">
        {[1, 2, 5, 10].map(n => (
          <button
            key={n}
            onClick={() => setTier(n)}
            className={`px-3 py-1 rounded border ${
              tier === n ? "bg-purple-700 text-white" : "bg-zinc-800 text-purple-300"
            }`}
          >
            {n}x
          </button>
        ))}
      </div>
    </div>
  );
}
