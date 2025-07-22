import React from 'react';

const MythicNodeIcon = ({ tier }) => {
  const tierClass = {
    mythic: 'text-purple-400',
    chaos: 'text-pink-500',
    divine: 'text-yellow-300'
  };
  return (
    <div className={`text-xl font-black ${tierClass[tier] || 'text-gray-400'}`}>
      🌀
    </div>
  );
};

export default MythicNodeIcon;
