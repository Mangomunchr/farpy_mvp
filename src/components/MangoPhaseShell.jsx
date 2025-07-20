import { useState } from 'react';

export default function MangoPhaseShell() {
  const [info] = useState("Shell wrap 88% complete");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🥭 Phase Shell</h2>
      <p>{info}</p>
    </div>
  );
}
