
export default function LegacyScore({ xp }) {
  const tier = xp >= 1000 ? '💠 Elder' : xp >= 500 ? '🔥 Keeper' : xp >= 100 ? '🌱 Initiate' : '🥚 Newborn';

  return (
    <div className="text-sm text-noxo-primary mt-2">
      Legacy Tier: <span className="font-bold text-noxo-accent">{tier}</span>
    </div>
  );
}
