
const MESSAGES = [
  { type: 'lore', msg: '🍋 The Vault has entered Monsoon State. Burn yield increased by 10%.' },
  { type: 'system', msg: '🎁 User NODEMONK_X claimed 240 Mango from the Chaos Pool.' },
  { type: 'lore', msg: '🌑 A Shadow Ritual has been detected near the lower branches.' },
  { type: 'system', msg: '🛠️ Patch v1.6 deployed — Streaks now count Chaos Burns.' },
  { type: 'lore', msg: '🔮 The Prophets have spoken: “Only flame opens the sealed gate.”' }
];

const getColor = (type) =>
  type === 'lore' ? 'text-purple-400' : 'text-noxo-accent';

export default function BroadcastFeed() {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 border border-noxo-accent rounded bg-black text-noxo-primary">
      <h1 className="text-xl font-bold mb-4">📡 Mango Broadcast Feed</h1>
      <ul className="text-sm space-y-3">
        {MESSAGES.map((entry, i) => (
          <li key={i} className={\`border-l-4 pl-3 \${getColor(entry.type)}\`}>
            {entry.msg}
          </li>
        ))}
      </ul>
    </div>
  );
}
