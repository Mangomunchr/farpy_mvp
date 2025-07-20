import useNodeSoul from '../hooks/useNodeSoul';

export default function NodeSoulLog({ id }) {
  const { memory, imprint } = useNodeSoul(id);

  return (
    <div className="p-4 border rounded bg-zinc-800 text-white text-sm">
      <h2 className="text-xl font-bold mb-2">🧠 NodeSoul Memory: {id}</h2>
      <ul className="list-disc pl-4 mb-2">
        {memory.map((m, i) => (
          <li key={i}>{new Date(m.time).toLocaleTimeString()} → {m.action}</li>
        ))}
      </ul>
      <button
        onClick={() => imprint('burned ritual')}
        className="bg-red-600 px-3 py-1 rounded"
      >
        Imprint 🔥
      </button>
    </div>
  );
}
