import React from 'react';

const MangoWeatherFX = ({ type }) => {
  const styles = {
    monsoon: 'bg-gradient-to-r from-green-900 to-black',
    eclipse: 'bg-gradient-to-tl from-gray-800 via-black to-purple-900',
    sunny: 'bg-gradient-to-r from-yellow-800 to-orange-900'
  };
  return <div className={`absolute inset-0 -z-10 pointer-events-none ${styles[type] || ''}`} />;
};

export default MangoWeatherFX;
