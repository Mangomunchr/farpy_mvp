import { useState } from 'react';

export default function MangoPhaseSurge() {
  const [surge] = useState("⚡ Surge Detected — Phase III-L");

  return (
    <div className="border p-4 rounded-xl shadow bg-orange-100">
      <h2 className="text-xl font-bold mb-2">⚡ Mango Phase</h2>
      <p>{surge}</p>
    </div>
  );
}
