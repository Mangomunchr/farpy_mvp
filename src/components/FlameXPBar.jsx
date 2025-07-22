import React from 'react';

const FlameXPBar = ({ value }) => (
  <div className="w-full h-3 bg-gray-800 rounded-full mt-2">
    <div
      className="h-full bg-red-500 rounded-full"
      style={{ width: `${Math.min(value, 100)}%` }}
    ></div>
  </div>
);

export default FlameXPBar;
