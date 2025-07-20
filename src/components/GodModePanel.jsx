import VaultRewardBoard from './VaultRewardBoard';
import VaultBurnStatus from './VaultBurnStatus';
import VaultTrailLog from './VaultTrailLog';
import VaultWeatherBar from './VaultWeatherBar';
import ChaosLockRing from './ChaosLockRing';
import SummonModeControl from './SummonModeControl';
import SwarmShardPanel from './SwarmShardPanel';
import RitualPatchConsole from './RitualPatchConsole';
import NodeMuncherLeaderboard from './NodeMuncherLeaderboard';

export default function GodModePanel() {
  return (
    <div className="bg-black text-white min-h-screen p-4 space-y-4">
      <VaultWeatherBar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <VaultBurnStatus />
        <ChaosLockRing />
        <SummonModeControl />
        <VaultRewardBoard />
        <SwarmShardPanel />
        <NodeMuncherLeaderboard />
        <VaultTrailLog />
        <RitualPatchConsole />
      </div>
    </div>
  );
}
