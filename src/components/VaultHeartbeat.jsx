import { useState } from 'react';

export default function VaultHeartbeat() {
  const [info] = useState("Rate: 44bpm | Glow: mild");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">❤️ Heartbeat</h2>
      <p>{info}</p>
    </div>
  );
}
