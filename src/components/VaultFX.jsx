import React from 'react';

const VaultFX = ({ amount }) => {
  return (
    <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg animate-bounce">
      +${amount.toFixed(2)} to Vault!
    </div>
  );
};

export default VaultFX;
