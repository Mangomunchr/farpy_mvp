import React from 'react';

const VaultDrainFX = ({ amount }) => (
  <div className="text-red-500 text-xs font-mono animate-pulse">
    ⬇️ Vault drained: -${amount}
  </div>
);

export default VaultDrainFX;
