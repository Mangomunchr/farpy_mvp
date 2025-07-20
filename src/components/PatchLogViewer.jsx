import { useState } from 'react';

export default function PatchLogViewer() {
  const [log] = useState([
    { version: "v1.0", summary: "Initial MVP stack created", timestamp: Date.now() - 600000 },
    { version: "v1.1", summary: "Added NodeMonk job claiming & Vault XP logic", timestamp: Date.now() - 300000 }
  ]);

  return (
    <div className="border p-4 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">Patch Log</h2>
      {log.map(entry => (
        <div key={entry.version} className="mb-2">
          <p><strong>{entry.version}</strong>: {entry.summary}</p>
        </div>
      ))}
    </div>
  );
}
