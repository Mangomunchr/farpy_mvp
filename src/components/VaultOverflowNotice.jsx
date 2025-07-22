import React from 'react';

const VaultOverflowNotice = ({ overflow }) => {
  if (!overflow) return null;
  return (
    <div className="bg-yellow-900 text-yellow-300 text-xs p-2 rounded border border-yellow-700">
      ⚠️ Vault overflow detected — rebalancing needed!
    </div>
  );
};

export default VaultOverflowNotice;
