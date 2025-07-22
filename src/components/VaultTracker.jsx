export default function VaultTracker({ xp = 0 }) {
  const rank = xp >= 1000 ? "Vaultborn" : xp >= 500 ? "Muncher" : "Renderling";
  return (
    <div>
      <h4>XP: {xp}</h4>
      <p>Rank: {rank}</p>
    </div>
  );
}
