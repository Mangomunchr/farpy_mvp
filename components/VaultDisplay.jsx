import { useState } from 'react';
import { getLevel, isSummonUnlocked } from '../../shared/xpSystem';

export default function VaultDisplay() {
  const [xp, setXP] = useState(120);
  const [vault, setVault] = useState(42.69);

  const ritualBoost = () => {
    const xpGain = 10;
    const vaultGain = xpGain * 0.42;
    setXP(prev => prev + xpGain);
    setVault(prev => prev + vaultGain);
  };

  return (
    <div className="border p-4 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">Vault Rewards</h2>
      <p>Total XP: {xp} ({getLevel(xp)})</p>
      <p>Mango Vault: ${vault.toFixed(2)}</p>
      {isSummonUnlocked(xp) ? (
        <p className="text-green-500">✅ Summon Mode Unlocked</p>
      ) : (
        <p className="text-yellow-500">🔒 Summon Mode Locked</p>
      )}
      <button onClick={ritualBoost} className="mt-2 bg-orange-600 text-white px-3 py-1 rounded">
        Simulate +10 XP Ritual
      </button>
    </div>
  );
}
