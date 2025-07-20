
const PATCHES = [
  { date: '2025-07-12', tag: 'NEW', message: 'Added NodeSoul Imprint viewer to /nodesoul.' },
  { date: '2025-07-10', tag: 'FIX', message: 'XP burn reward calculation stabilized.' },
  { date: '2025-07-08', tag: 'TUNE', message: 'Vault FX modes now saved locally.' },
  { date: '2025-07-05', tag: 'INIT', message: 'Ritual engine (burn, claim, vault) deployed.' }
];

const tagColors = {
  NEW: 'text-green-400',
  FIX: 'text-yellow-400',
  TUNE: 'text-blue-400',
  INIT: 'text-noxo-accent'
};

export default function PatchNoteViewer() {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 border border-noxo-accent rounded bg-black text-noxo-primary">
      <h1 className="text-xl font-bold mb-4">📜 Patch Notes</h1>
      <ul className="space-y-3 text-sm">
        {PATCHES.map((p, i) => (
          <li key={i} className="border-l-4 pl-3 border-noxo-accent">
            <div className="flex justify-between items-center">
              <span className={\`\${tagColors[p.tag] || 'text-noxo-accent'} text-xs font-bold uppercase\`}>{p.tag}</span>
              <span className="text-xs opacity-60">{p.date}</span>
            </div>
            <div>{p.message}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
