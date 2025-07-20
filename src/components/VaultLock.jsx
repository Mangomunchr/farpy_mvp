import React from 'react';

const VaultLock = ({ locked }) => {
  if (!locked) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
      <div className="text-red-600 text-xl font-bold text-center space-y-2">
        🔒 VAULT LOCKED<br />
        Rituals are frozen<br />
        Await override.
      </div>
    </div>
  );
};

export default VaultLock;
