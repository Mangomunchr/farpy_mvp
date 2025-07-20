import { useState } from 'react';

export default function MonkLegacyAnchor() {
  const [anchor] = useState("🪨 Locked – 3 legacy imprints");

  return (
    <div className="border p-4 rounded-xl shadow bg-zinc-100">
      <h2 className="text-xl font-bold mb-2">🪝 Legacy Anchor</h2>
      <p>{anchor}</p>
    </div>
  );
}
