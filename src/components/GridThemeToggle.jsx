import React from 'react';

const GridThemeToggle = ({ onToggle }) => (
  <button
    onClick={onToggle}
    className="text-xs bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600"
  >
    🌓 Toggle Theme
  </button>
);

export default GridThemeToggle;
