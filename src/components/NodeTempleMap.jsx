export default function NodeTempleMap() {
  return (
    <div className="p-6 border rounded bg-gradient-to-br from-zinc-800 to-black text-white shadow-inner">
      <h2 className="text-xl font-bold mb-4 text-lime-300">🌐 NodeTemple Atlas</h2>
      <ul className="text-sm text-zinc-300 space-y-1 font-mono">
        <li><span className="text-green-400">🟢 NodeMonk Outpost Alpha</span> — active</li>
        <li><span className="text-yellow-300">🟡 Vault Corridor B7</span> — drift stable</li>
        <li><span className="text-red-500">🔴 Chompy Grid Spine</span> — ⚠️ surge</li>
        <li><span className="text-purple-300">🟣 MangoStorm Ridge</span> — weather rolling</li>
      </ul>
      <div className="mt-4 text-xs italic text-zinc-400 border-t border-zinc-700 pt-2">
        You are mapped within Vault Layer 4B.
      </div>
    </div>
  );
}
