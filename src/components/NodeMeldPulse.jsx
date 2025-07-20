import { useState } from 'react';

export default function NodeMeldPulse() {
  const [info] = useState("Link active to Vault Grid v3");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🌐 Meld Pulse</h2>
      <p>{info}</p>
    </div>
  );
}
