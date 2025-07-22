import React from 'react';

const VaultSyncDebug = ({ state }) => (
  <div className="text-[10px] text-gray-500 font-mono mt-2 border border-gray-700 p-1 rounded">
    SYNC DEBUG: {JSON.stringify(state)}
  </div>
);

export default VaultSyncDebug;
