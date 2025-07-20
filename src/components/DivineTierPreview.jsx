import { useState } from 'react';

export default function DivineTierPreview() {
  const [unlocked] = useState(false);

  return (
    <div className="border p-4 rounded-xl shadow bg-yellow-200">
      <h2 className="text-xl font-bold mb-2">👁️ Divine Tier</h2>
      <p>{unlocked ? "✅ Access Granted" : "🔒 Tier Locked"}</p>
    </div>
  );
}
