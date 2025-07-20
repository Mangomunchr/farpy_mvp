import { useState } from 'react';

export default function NodeSyncFaultLog() {
  const [fault] = useState("🔧 Fault #102 | Desync event 14m ago");

  return (
    <div className="border p-4 rounded-xl shadow bg-yellow-50">
      <h2 className="text-xl font-bold mb-2">🔧 Node Fault Log</h2>
      <p>{fault}</p>
    </div>
  );
}
