import React from 'react';

const MemoryVaultOverlay = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="bg-yellow-900 text-white p-6 rounded max-w-lg shadow-lg border border-yellow-600">
        <h2 className="text-xl font-bold mb-2">🧠 Memory Vault</h2>
        <p className="text-sm mb-4">Your journey is stored in local ritual memory. XP, burns, roles, and state are private to this device.</p>
        <button onClick={onClose} className="bg-yellow-600 px-4 py-1 rounded hover:bg-yellow-500">Understood</button>
      </div>
    </div>
  );
};

export default MemoryVaultOverlay;
