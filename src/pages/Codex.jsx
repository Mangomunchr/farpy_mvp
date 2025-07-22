import React from 'react';

const entries = [
  { title: "NodeMonks", body: "GPU-powered ascetics. Earn real cash for uptime + loyalty." },
  { title: "Rendars", body: "XP-burning chaos users. Spend CoolBeans™ for boosts + unlocks." },
  { title: "Vault", body: "The sacred pool. All power flows from and returns to the Vault." },
  { title: "Chaos Ritual", body: "Unpredictable global event. Burn XP or Beans to participate." },
];

export default function Codex() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-noxo-primary">
      <h1 className="text-2xl font-bold mb-4">📜 Codex of Farpy</h1>
      <div className="space-y-4">
        {entries.map((entry, i) => (
          <div key={i} className="border border-noxo-accent rounded p-4">
            <h2 className="text-lg font-bold text-yellow-300">{entry.title}</h2>
            <p>{entry.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
