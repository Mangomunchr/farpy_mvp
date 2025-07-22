import React from 'react';

const GridAuraFX = ({ mode }) => {
  const auraMap = {
    calm: 'bg-gradient-to-br from-black to-gray-800',
    surge: 'bg-gradient-to-br from-red-900 to-black',
    echo: 'bg-gradient-to-br from-green-900 to-black'
  };
  return (
    <div className={`fixed inset-0 z-0 pointer-events-none ${auraMap[mode] || auraMap.calm}`} />
  );
};

export default GridAuraFX;
