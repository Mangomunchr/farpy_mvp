import React from 'react';

const VaultChantModal = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-gray-900 border border-yellow-600 text-yellow-300 p-6 rounded max-w-sm text-center space-y-3">
        <h2 className="text-xl font-bold">🗣️ Vault Chant Initiated</h2>
        <p>Repeat the ritual command aloud to boost XP.</p>
        <button onClick={onClose} className="bg-yellow-600 px-3 py-1 rounded">End Ritual</button>
      </div>
    </div>
  );
};

export default VaultChantModal;
