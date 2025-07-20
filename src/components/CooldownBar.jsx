import React from 'react';

const CooldownBar = ({ seconds }) => {
  return (
    <div className="w-full bg-red-900 rounded h-3 mt-2">
      <div className="bg-red-500 h-3 rounded transition-all duration-1000"
        style={{ width: `${(seconds / 10) * 100}%` }}></div>
    </div>
  );
};

export default CooldownBar;
