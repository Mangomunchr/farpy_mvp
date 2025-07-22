import React from 'react';

const GridErrorShield = ({ active }) => (
  active ? (
    <div className="fixed inset-0 bg-red-900 bg-opacity-60 flex items-center justify-center z-50">
      <div className="text-white text-xl font-bold">🛡️ Grid Shield: ERROR LOCK ENGAGED</div>
    </div>
  ) : null
);

export default GridErrorShield;
