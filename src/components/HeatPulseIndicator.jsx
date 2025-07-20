import React from 'react';

const HeatPulseIndicator = ({ active }) => {
  if (!active) return null;
  return (
    <div className="fixed top-0 right-0 mt-2 mr-2 z-50">
      <div className="animate-pulse text-red-500 text-xs font-bold bg-black px-2 py-1 rounded border border-red-700">
        🔥 GRID HEAT ACTIVE
      </div>
    </div>
  );
};

export default HeatPulseIndicator;
