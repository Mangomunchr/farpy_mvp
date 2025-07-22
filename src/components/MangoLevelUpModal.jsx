import React from 'react';

const MangoLevelUpModal = ({ level, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
    <div className="bg-yellow-800 p-6 rounded text-white text-center border border-yellow-500 space-y-2">
      <h1 className="text-xl font-bold">🥭 Mango Level Up!</h1>
      <p>You've reached level {level}!</p>
      <button onClick={onClose} className="px-3 py-1 bg-yellow-500 text-black rounded">Continue</button>
    </div>
  </div>
);

export default MangoLevelUpModal;
