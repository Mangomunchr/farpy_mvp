import React from 'react';

const SigilMark = ({ tier }) => {
  const glow = {
    mythic: 'text-purple-400 animate-pulse',
    divine: 'text-yellow-300 animate-glow',
    default: 'text-gray-400'
  };
  return (
    <div className={`text-xs font-bold ${glow[tier] || glow.default}`}>
      ✦ {tier.toUpperCase()} SIGIL
    </div>
  );
};

export default SigilMark;
