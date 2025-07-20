import useRuntimeSwitch from '../hooks/useRuntimeSwitch';

export default function RuntimeSwitchboard() {
  const { mode, toggle } = useRuntimeSwitch();

  return (
    <div className="p-4 border rounded bg-purple-900 text-purple-200">
      <h2 className="text-xl font-bold mb-2">🎛 Runtime Mode</h2>
      <p>Current: <span className="font-mono">{mode}</span></p>
      <div className="mt-2 space-x-2">
        <button onClick={() => toggle("idle")} className="bg-purple-600 px-2 py-1 rounded">Idle</button>
        <button onClick={() => toggle("chaos")} className="bg-purple-600 px-2 py-1 rounded">Chaos</button>
        <button onClick={() => toggle("ritual")} className="bg-purple-600 px-2 py-1 rounded">Ritual</button>
      </div>
    </div>
  );
}
