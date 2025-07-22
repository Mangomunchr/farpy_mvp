import React from 'react';

const VaultDriftWarning = ({ active }) => {
  if (!active) return null;
  return (
    <div className="bg-red-800 text-white text-xs p-2 text-center rounded border border-red-500">
      ⚠️ Vault Drift Detected — alignment disrupted.
    </div>
  );
};

export default VaultDriftWarning;
