import { useState } from 'react';

export default function WhisperDetectionNode() {
  const [active] = useState(true);

  return (
    <div className="border p-4 rounded-xl shadow bg-gray-300">
      <h2 className="text-xl font-bold mb-2">🫥 Whisper Node</h2>
      <p>{active ? "🫧 Monitoring Sub-Rituals" : "🔕 Offline"}</p>
    </div>
  );
}
