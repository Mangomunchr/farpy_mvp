import { useState } from 'react';

export default function VisualLog() {
  const [log] = useState([
    { type: "claim", by: "nodeMonk1", job: "Render A" },
    { type: "summon", by: "nodeMonk1" },
    { type: "bless", by: "rendar1", amount: 12 }
  ]);

  return (
    <div className="border p-4 rounded-xl shadow bg-stone-100">
      <h2 className="text-xl font-bold mb-2">📜 Visual Ritual Log</h2>
      <ul>
        {log.map((e, i) => (
          <li key={i}>
            {e.type === "claim" && `🧙 ${e.by} claimed ${e.job}`}
            {e.type === "summon" && `🔥 ${e.by} activated Summon Mode`}
            {e.type === "bless" && `🙏 ${e.by} blessed Vault with ${e.amount}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
