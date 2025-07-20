import React from 'react';

const GridWeatherFX = ({ aura }) => {
  const fx = {
    storm: 'bg-gradient-to-br from-blue-900 to-black',
    surge: 'bg-gradient-to-br from-orange-900 to-black',
    silence: 'bg-gradient-to-br from-gray-900 to-black'
  };
  return <div className={`fixed inset-0 z-0 pointer-events-none ${fx[aura] || fx.silence}`} />;
};

export default GridWeatherFX;
