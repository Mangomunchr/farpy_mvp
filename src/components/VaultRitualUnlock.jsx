import useVaultTrigger from "../hooks/useVaultTrigger";

export default function VaultRitualUnlock({ xp = 0, referrals = 0 }) {
  const vaultReady = useVaultTrigger(xp, referrals);

  return (
    <div>
      {vaultReady ? (
        <div>🌀 CHAOS UNLOCKED: Vault Awakened!</div>
      ) : (
        <div>⛓️ Ritual Sealed. XP + Referrals Needed.</div>
      )}
    </div>
  );
}
