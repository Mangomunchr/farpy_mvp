import useVaultPayouts from '../hooks/useVaultPayouts';

export default function VaultRewardBoard() {
  const rewards = useVaultPayouts();

  return (
    <div className="p-4 border rounded bg-black text-lime-300 font-mono">
      <h2 className="text-xl font-bold mb-2">💸 Vault Distribution</h2>
      <ol className="list-decimal pl-4 space-y-1 text-sm">
        {rewards.map((r, i) => (
          <li key={r.id}>
            {r.id} — ${r.payout} (weight: {r.weight})
          </li>
        ))}
      </ol>
    </div>
  );
}
