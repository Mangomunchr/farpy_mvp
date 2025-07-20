import { useState } from 'react';

export default function FlameTraceMarker() {
  const [trace] = useState("🔥 Trace #041 – Burn Threshold Reached");

  return (
    <div className="border p-4 rounded-xl shadow bg-red-200">
      <h2 className="text-xl font-bold mb-2">🔥 Flame Trace</h2>
      <p>{trace}</p>
    </div>
  );
}
