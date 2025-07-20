import { useState } from 'react';

export default function ConvergenceStatusBeacon() {
  const [status] = useState("🟢 Stable");

  return (
    <div className="border p-4 rounded-xl shadow bg-emerald-50">
      <h2 className="text-xl font-bold mb-2">🧭 Convergence Beacon</h2>
      <p>Status: {status}</p>
    </div>
  );
}
