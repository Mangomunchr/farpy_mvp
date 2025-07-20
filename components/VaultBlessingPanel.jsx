import { useState } from 'react';

export default function VaultBlessingPanel() {
  const [blessedAmount, setBlessedAmount] = useState(0);

  const blessVault = () => {
    const amount = Math.floor(Math.random() * 20) + 1;
    setBlessedAmount(prev => prev + amount);
    alert(`✨ You blessed the vault with ${amount} Mango Units!`);
  };

  return (
    <div className="border p-4 rounded-xl shadow bg-green-100">
      <h2 className="text-xl font-bold mb-2">🙏 Vault Blessing</h2>
      <p>Total Blessed: {blessedAmount} Mango Units</p>
      <button onClick={blessVault} className="mt-2 bg-green-600 text-white px-4 py-1 rounded">
        Bless the Vault
      </button>
    </div>
  );
}
