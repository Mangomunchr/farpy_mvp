import { useState } from 'react';

export default function NodeDiagnosticsPanel() {
  const [status] = useState({
    GPU: "🟢 Online",
    Temp: "68°C",
    Load: "82%",
    Fan: "Silent Monk Mode"
  });

  return (
    <div className="border p-4 rounded-xl shadow bg-gray-100">
      <h2 className="text-xl font-bold mb-2">🩺 Node Diagnostics</h2>
      <p>GPU Status: {status.GPU}</p>
      <p>Temp: {status.Temp}</p>
      <p>Load: {status.Load}</p>
      <p>Fan Mode: {status.Fan}</p>
    </div>
  );
}
