import { useState } from 'react';

export default function SanctumAlignmentCompass() {
  const [heading] = useState("🧭 Drift Northwest – Pull stable");

  return (
    <div className="border p-4 rounded-xl shadow bg-teal-100">
      <h2 className="text-xl font-bold mb-2">🧭 Sanctum Compass</h2>
      <p>{heading}</p>
    </div>
  );
}
