import React from 'react';

const MangoAura = ({ strength = 1 }) => {
  const opacity = Math.min(1, strength * 0.1);
  return (
    <div className="fixed inset-0 pointer-events-none z-0" style={{ backgroundColor: `rgba(255, 200, 0, ${opacity})` }}></div>
  );
};

export default MangoAura;
