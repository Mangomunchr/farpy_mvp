import React from 'react';

const VaultDriftNotice = ({ drift }) => {
  if (!drift) return null;
  return (
    <div className="text-red-400 text-xs mt-1">
      ⚠️ Vault drift detected: {drift} credits unclaimed
    </div>
  );
};

export default VaultDriftNotice;
