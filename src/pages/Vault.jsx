import React from 'react';
import VaultStatsCard from '../components/VaultStatsCard';
import ClaimRewardsButton from '../components/ClaimRewardsButton';
import MangoPoolMeter from '../components/MangoPoolMeter';
import VaultActivityLog from '../components/VaultActivityLog';
import ChaosWarningBanner from '../components/ChaosWarningBanner';

export default function Vault() {
  const currentMango = 12933.2;
  const claimable = 143.78;
  const logs = [
    "NodeMonk47 claimed $23.91",
    "Chaos Ritual drained 333 beans",
    "Vault refilled by 1,000 CoolBeans"
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold text-noxo-primary mb-6">🏦 Vault Overview</h1>

      <ChaosWarningBanner />

      <div className="flex flex-col lg:flex-row gap-6 mb-10">
        <VaultStatsCard mangoTotal={currentMango} />
        <MangoPoolMeter mangoTotal={currentMango} />
        <ClaimRewardsButton amount={claimable} />
      </div>

      <VaultActivityLog logs={logs} />
    </div>
  );
}
