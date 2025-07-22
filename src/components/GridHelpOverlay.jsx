import React from 'react';

const GridHelpOverlay = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded border border-yellow-400 text-yellow-200 max-w-lg">
        <h2 className="text-lg font-bold mb-2">📖 GRID HELP</h2>
        <ul className="text-xs list-disc pl-4 space-y-1">
          <li>Jobs submitted feed the Vault</li>
          <li>NodeMonks earn Vault share</li>
          <li>XP is earned via burn rituals</li>
          <li>Grid reacts to flame and drift</li>
        </ul>
        <button onClick={onClose} className="mt-4 bg-yellow-500 text-black px-4 py-1 rounded">Close</button>
      </div>
    </div>
  );
};

export default GridHelpOverlay;
