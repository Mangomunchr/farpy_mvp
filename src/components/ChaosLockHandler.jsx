import React, { useState } from 'react';

const ChaosLockHandler = () => {
  const [locked, setLocked] = useState(true);

  return (
    <div className="mt-2">
      {locked ? (
        <div className="bg-red-900 text-white p-2 rounded text-xs">
          🔒 Chaos Systems are LOCKED
        </div>
      ) : (
        <div className="bg-green-800 text-white p-2 rounded text-xs">
          ✅ Chaos Mode: Unleashed
        </div>
      )}
      <button onClick={() => setLocked(!locked)} className="mt-2 px-2 py-1 text-xs bg-gray-800 text-white rounded">
        Toggle Lock
      </button>
    </div>
  );
};

export default ChaosLockHandler;
