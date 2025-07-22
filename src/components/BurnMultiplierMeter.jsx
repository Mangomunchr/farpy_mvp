import React from 'react';

const BurnMultiplierMeter = ({ multiplier }) => (
  <div className="text-xs font-bold text-red-500">
    🔥 Burn Multiplier: {multiplier}x
  </div>
);

export default BurnMultiplierMeter;
