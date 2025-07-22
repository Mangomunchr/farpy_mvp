import React from 'react';

const VaultBalanceDisplay = ({ amount }) => (
  <div className="text-yellow-300 font-bold text-lg mb-2">
    🏦 Vault: ${amount.toFixed(2)}
  </div>
);

export default VaultBalanceDisplay;
