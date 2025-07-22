import React from 'react';

const MangoSignal = ({ active }) => {
  return active ? (
    <div className="fixed top-4 right-4 bg-green-600 text-black text-xs px-3 py-1 rounded shadow-lg z-50">
      🥭 SIGNAL RECEIVED
    </div>
  ) : null;
};

export default MangoSignal;
