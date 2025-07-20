import useVaultTrail from '../hooks/useVaultTrail';

export default function VaultTrailLog() {
  const { trail } = useVaultTrail();

  return (
    <div className="p-4 border rounded bg-zinc-950 text-white text-xs">
      <h2 className="text-sm font-bold mb-2 text-yellow-300">📜 Vault Trail Log</h2>
      <div className="max-h-48 overflow-y-auto font-mono space-y-1 leading-relaxed">
        {trail.map((t, i) => (
          <div key={i} className="text-zinc-400">
            ⏱ {new Date(t.time).toLocaleTimeString()} → <span className="text-white">{t.user || 'SYS'}</span>: {t.action}
          </div>
        ))}
      </div>
    </div>
  );
}
