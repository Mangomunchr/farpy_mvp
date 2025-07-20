import React from 'react';

const TokenMintModal = ({ show, onClose, onMint }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-green-900 p-6 rounded border border-green-500 text-white max-w-md text-center space-y-4">
        <h2 className="text-xl font-bold">🪙 Mint Grid Token</h2>
        <p>This will mint a symbolic token representing this ritual streak.</p>
        <div className="flex justify-center space-x-4">
          <button onClick={onClose} className="bg-gray-700 px-3 py-1 rounded">Cancel</button>
          <button onClick={onMint} className="bg-green-500 text-black px-3 py-1 rounded font-semibold">Mint</button>
        </div>
      </div>
    </div>
  );
};

export default TokenMintModal;
