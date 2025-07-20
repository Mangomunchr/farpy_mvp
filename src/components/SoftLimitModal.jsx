import React from 'react';

const SoftLimitModal = ({ show, onAcknowledge }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-red-900 text-white p-6 rounded shadow-lg max-w-sm">
        <h2 className="text-xl font-bold mb-2">⚠️ Usage Limit Reached</h2>
        <p className="text-sm mb-4">You've hit a ritual threshold. Please wait before continuing.</p>
        <button onClick={onAcknowledge} className="px-4 py-2 bg-red-700 rounded hover:bg-red-600">
          Understood
        </button>
      </div>
    </div>
  );
};

export default SoftLimitModal;
