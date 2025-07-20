import { useState } from 'react';

export default function SanctumBreathTrace() {
  const [info] = useState("Trace signature: minor exhale detected");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🫁 Sanctum Breath</h2>
      <p>{info}</p>
    </div>
  );
}
