import React from 'react';

const OnboardingOverlay = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="bg-gray-800 text-white p-6 max-w-lg rounded-lg space-y-4 shadow-lg border border-yellow-500">
        <h1 className="text-2xl font-bold">🌀 Welcome to Farpy Grid</h1>
        <ul className="text-sm list-disc pl-6 space-y-1">
          <li>Submit jobs anonymously or with identity</li>
          <li>Vault grows with every burn</li>
          <li>NodeMonks eat from the Vault</li>
          <li>XP unlocks future rituals & roles</li>
        </ul>
        <button onClick={onClose} className="bg-yellow-500 px-4 py-1 rounded hover:bg-yellow-600">
          Begin
        </button>
      </div>
    </div>
  );
};

export default OnboardingOverlay;
