import { useState } from 'react';

export default function FlameRiftSplinter() {
  const [splinter] = useState("🔥 Splintered — burn shard 2 embedded");

  return (
    <div className="border p-4 rounded-xl shadow bg-red-100">
      <h2 className="text-xl font-bold mb-2">🔥 Flame Splinter</h2>
      <p>{splinter}</p>
    </div>
  );
}
