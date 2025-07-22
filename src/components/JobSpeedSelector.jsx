import React from 'react';

const JobSpeedSelector = ({ speed, setSpeed }) => (
  <div className="text-sm text-white space-x-2">
    <label>⚡ Speed:</label>
    {[1, 2, 5, 10, 100].map((val) => (
      <button
        key={val}
        className={`px-2 py-1 text-xs border ${
          speed === val ? 'bg-green-500 text-black' : 'bg-gray-800 text-white'
        }`}
        onClick={() => setSpeed(val)}
      >
        {val}x
      </button>
    ))}
  </div>
);

export default JobSpeedSelector;
