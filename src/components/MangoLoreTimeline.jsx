import React from 'react';

const events = [
  { phase: "1.0", desc: "Vault ignition, NodeMonk awakens" },
  { phase: "1.5", desc: "Chaos Button sealed, XP burns begin" },
  { phase: "2.0", desc: "Vault Stabilized, Mango Trail revealed" }
];

const MangoLoreTimeline = () => (
  <div className="text-xs mt-3 text-yellow-300 space-y-1 border-t border-yellow-600 pt-2">
    {events.map((e, i) => (
      <div key={i}>📜 {e.phase}: {e.desc}</div>
    ))}
  </div>
);

export default MangoLoreTimeline;
