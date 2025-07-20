import useNodeMunchers from '../hooks/useNodeMunchers';

export default function NodeMuncherLeaderboard() {
  const monks = useNodeMunchers();

  return (
    <div className="p-4 border rounded bg-zinc-950 text-white">
      <h2 className="text-xl font-bold mb-2">🏆 NodeMunch Leaderboard</h2>
      <ol className="list-decimal pl-4 space-y-1 text-sm">
        {monks.map((m, i) => (
          <li key={m.id}>
            <strong>{m.id}</strong> — XP: {m.xp} — Score: {m.score}
          </li>
        ))}
      </ol>
    </div>
  );
}
