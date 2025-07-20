import React from 'react';

const VaultDrainFX = ({ show }) => {
  if (!show) return null;
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center mt-6 z-50">
      <div className="bg-red-700 text-white px-4 py-2 rounded shadow-lg animate-pulse border border-red-900">
        ⚠️ Vault Drain Detected!
      </div>
    </div>
  );
};

export default VaultDrainFX;
