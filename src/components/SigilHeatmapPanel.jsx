import { useState } from 'react';

export default function SigilHeatmapPanel() {
  const [intensity] = useState("💠 Zone 3: Elevated Burn");

  return (
    <div className="border p-4 rounded-xl shadow bg-rose-100">
      <h2 className="text-xl font-bold mb-2">🗺️ Sigil Heatmap</h2>
      <p>{intensity}</p>
    </div>
  );
}
