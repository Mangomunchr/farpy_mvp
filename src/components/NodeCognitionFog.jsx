import { useState } from 'react';

export default function NodeCognitionFog() {
  const [fog] = useState("🌫️ Active — Visual inference reduced");

  return (
    <div className="border p-4 rounded-xl shadow bg-gray-200">
      <h2 className="text-xl font-bold mb-2">🌫️ Cognition Fog</h2>
      <p>{fog}</p>
    </div>
  );
}
