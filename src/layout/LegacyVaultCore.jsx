import VaultOverrideTerminal from "../components/VaultOverrideTerminal";
import VaultTrailLog from "../components/VaultTrailLog";
import RoleStateMemory from "../components/RoleStateMemory";
import UnlockChainStatus from "../components/UnlockChainStatus";

export default function LegacyVaultCore() {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-6 bg-neutral-950">
      <VaultOverrideTerminal />
      <VaultTrailLog />
      <RoleStateMemory />
      <UnlockChainStatus />
    </div>
  );
}
