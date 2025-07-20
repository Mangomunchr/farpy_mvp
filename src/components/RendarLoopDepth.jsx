import { useState } from 'react';

export default function RendarLoopDepth() {
  const [depth] = useState("↩️ Loop x7 – Fractal Stable");

  return (
    <div className="border p-4 rounded-xl shadow bg-lime-200">
      <h2 className="text-xl font-bold mb-2">🔁 Rendar Loop</h2>
      <p>{depth}</p>
    </div>
  );
}
