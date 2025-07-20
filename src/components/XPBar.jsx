import React from 'react';

const XPBar = ({ xp }) => {
  const level = Math.floor(xp / 100);
  const progress = xp % 100;

  return (
    <div className="mb-4 text-white">
      <div className="text-sm mb-1">Level {level}</div>
      <div className="w-full bg-gray-700 h-4 rounded">
        <div className="bg-green-500 h-4 rounded" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default XPBar;
