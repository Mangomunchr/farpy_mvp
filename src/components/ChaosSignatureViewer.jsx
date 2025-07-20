import { useState } from 'react';

export default function ChaosSignatureViewer() {
  const [sig] = useState("🕷️ Sigil: Thread of Drift – Unstable");

  return (
    <div className="border p-4 rounded-xl shadow bg-rose-200">
      <h2 className="text-xl font-bold mb-2">🩸 Chaos Signature</h2>
      <p>{sig}</p>
    </div>
  );
}
