import React from 'react';

const BurnPrompt = ({ visible, onClose, onConfirm }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-6 rounded shadow-lg max-w-sm space-y-4">
        <h2 className="text-xl font-bold">🔥 Summon Ritual</h2>
        <p>This will burn GPU flame. Are you sure?</p>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-1 bg-gray-700 rounded hover:bg-gray-600">Cancel</button>
          <button onClick={onConfirm} className="px-4 py-1 bg-green-600 rounded hover:bg-green-500">Burn It</button>
        </div>
      </div>
    </div>
  );
};

export default BurnPrompt;
