import { useState } from 'react';

export default function TierLadderProgress() {
  const [tier] = useState("📶 Tier IV – Mythos Echo");

  return (
    <div className="border p-4 rounded-xl shadow bg-purple-100">
      <h2 className="text-xl font-bold mb-2">🪜 Tier Ladder</h2>
      <p>{tier}</p>
    </div>
  );
}
