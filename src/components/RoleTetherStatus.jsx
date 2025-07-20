import { useState } from 'react';

export default function RoleTetherStatus() {
  const [tethered] = useState("🔗 Synced to Monk Core");

  return (
    <div className="border p-4 rounded-xl shadow bg-teal-100">
      <h2 className="text-xl font-bold mb-2">🪢 Role Tether</h2>
      <p>{tethered}</p>
    </div>
  );
}
