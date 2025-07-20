import { useState } from 'react';

export default function CognitionRerouteLog() {
  const [info] = useState("Route 22b engaged after fog onset");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🧠 Reroute Log</h2>
      <p>{info}</p>
    </div>
  );
}
