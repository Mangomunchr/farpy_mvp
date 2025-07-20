import { useState } from 'react';

export default function FlameEchoTrail() {
  const [trail] = useState("🔥 Echo Trail #58 – Anchor stable");

  return (
    <div className="border p-4 rounded-xl shadow bg-red-100">
      <h2 className="text-xl font-bold mb-2">🔥 Flame Echo Trail</h2>
      <p>{trail}</p>
    </div>
  );
}
