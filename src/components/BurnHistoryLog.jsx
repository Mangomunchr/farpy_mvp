
import React from 'react';

const mockBurns = [
  { id: "VLT-0285", action: "Chaos Ritual", result: "+2.4 XP", time: "2h ago" },
  { id: "VLT-0284", action: "Vault Stabilization", result: "+1.1 XP", time: "4h ago" },
  { id: "VLT-0283", action: "Node Sync", result: "+0.6 XP", time: "6h ago" }
];

function BurnHistoryLog() {
  return (
    <div className="bg-black text-green-400 font-mono p-4 rounded-xl border border-green-700 text-sm">
      <div className="mb-2 font-bold">🔥 Burn History Log</div>
      {mockBurns.map((burn, i) => (
        <div key={i} className="mb-1">
          [{burn.time}] {burn.id}: {burn.action} → {burn.result}
        </div>
      ))}
    </div>
  );
}

export default BurnHistoryLog;
