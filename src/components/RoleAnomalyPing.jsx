import { useState } from 'react';

export default function RoleAnomalyPing() {
  const [anomaly] = useState("🚨 Ping at ∆Node_T12 | Drift speed: 0.9x");

  return (
    <div className="border p-4 rounded-xl shadow bg-yellow-200">
      <h2 className="text-xl font-bold mb-2">🚨 Role Anomaly</h2>
      <p>{anomaly}</p>
    </div>
  );
}
