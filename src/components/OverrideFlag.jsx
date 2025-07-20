import React from 'react';

const OverrideFlag = ({ enabled, label }) => {
  if (!enabled) return null;
  return (
    <div className="fixed top-0 left-0 bg-red-700 text-white text-xs px-3 py-1 font-bold z-50">
      🔒 {label.toUpperCase()} OVERRIDE ACTIVE
    </div>
  );
};

export default OverrideFlag;
