import useSwarmTest from '../hooks/useSwarmTest';

export default function SwarmShardPanel() {
  const { shards, dispatch } = useSwarmTest();

  return (
    <div className="p-4 border rounded bg-zinc-900 text-orange-300">
      <h2 className="text-xl font-bold mb-2">🧬 SAURAN Swarm Dispatch</h2>
      <button onClick={dispatch} className="px-3 py-1 bg-orange-500 rounded">Send Shards</button>
      <ul className="mt-2 space-y-1 text-sm">
        {shards.map((s, i) => (
          <li key={i}>
            {s.shardId} → {s.nodeId} [{s.payload.type}]
          </li>
        ))}
      </ul>
    </div>
  );
}
