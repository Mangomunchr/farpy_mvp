import React from 'react';

const RitualMultiplier = ({ multiplier }) => (
  <div className="text-xs text-orange-400 font-bold">
    ✴️ Ritual Multiplier: x{multiplier.toFixed(1)}
  </div>
);

export default RitualMultiplier;
