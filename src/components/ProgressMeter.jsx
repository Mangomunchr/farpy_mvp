import React from 'react';

const ProgressMeter = ({ percent }) => {
  return (
    <div className="my-4 text-white text-sm">
      <div className="mb-1">System Completion: {percent}%</div>
      <div className="w-full bg-gray-700 h-2 rounded">
        <div className="bg-blue-500 h-2 rounded" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressMeter;
