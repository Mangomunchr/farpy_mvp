import { useState } from 'react';

export default function NodeLinkBridge() {
  const [linked] = useState(true);

  return (
    <div className="border p-4 rounded-xl shadow bg-green-200">
      <h2 className="text-xl font-bold mb-2">🌉 Link Bridge</h2>
      <p>{linked ? "🔗 Active" : "❌ Disconnected"}</p>
    </div>
  );
}
