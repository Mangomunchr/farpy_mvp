import useRitualConsole from '../hooks/useRitualConsole';

export default function RitualPatchConsole() {
  const { log, trigger } = useRitualConsole();

  return (
    <div className="p-4 border rounded bg-zinc-950 text-teal-300 text-sm font-mono">
      <h2 className="text-lg font-bold mb-2">🛠 Ritual Patch Console</h2>
      <div className="space-x-2 mb-2">
        <button onClick={() => trigger('force-lock')} className="bg-teal-600 px-2 py-1 rounded">Force Lock</button>
        <button onClick={() => trigger('cooldown-purge')} className="bg-teal-600 px-2 py-1 rounded">Cooldown Purge</button>
        <button onClick={() => trigger('ritual-burn')} className="bg-teal-600 px-2 py-1 rounded">Burn</button>
        <button onClick={() => trigger('reset-weather')} className="bg-teal-600 px-2 py-1 rounded">Reset Weather</button>
      </div>
      <div className="bg-black p-2 rounded max-h-40 overflow-y-auto">
        {log.map((line, i) => <div key={i}>{line}</div>)}
      </div>
    </div>
  );
}
