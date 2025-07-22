export default function LeaderboardPanel({ data = [] }) {
  return (
    <div>
      <h4>Top NodeMunchers</h4>
      <ol>
        {data.map((entry, i) => (
          <li key={i}>{entry.name} — {entry.xp} XP</li>
        ))}
      </ol>
    </div>
  );
}
