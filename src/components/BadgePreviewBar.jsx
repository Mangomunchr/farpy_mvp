export default function BadgePreviewBar() {
  const ranks = [
    { label: 'Renderling', color: 'text-zinc-400' },
    { label: 'Rendar', color: 'text-purple-400' },
    { label: 'NodeMonk', color: 'text-lime-300' },
    { label: 'Mythic Node', color: 'text-yellow-300' }
  ];

  return (
    <div className="flex justify-center space-x-4 p-2 bg-zinc-900 rounded mt-2">
      {ranks.map((r, i) => (
        <div key={i} className={`font-bold text-sm ${r.color}`}>
          🛡 {r.label}
        </div>
      ))}
    </div>
  );
}
