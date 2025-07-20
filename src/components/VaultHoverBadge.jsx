export default function VaultHoverBadge({ reward }) {
  return (
    <div className="relative group">
      <span className="text-yellow-400 font-mono">💰 ${reward}</span>
      <div className="absolute hidden group-hover:block bg-black text-white text-xs p-1 rounded border border-yellow-500 mt-1 z-10">
        Estimated reward from current summon
      </div>
    </div>
  );
}
