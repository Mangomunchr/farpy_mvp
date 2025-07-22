import React from 'react';

const GridAlertToast = ({ message, type = 'info' }) => {
  const color = {
    info: 'text-blue-300 border-blue-600',
    warn: 'text-yellow-300 border-yellow-600',
    error: 'text-red-400 border-red-600'
  }[type];

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 text-xs font-mono border rounded bg-black ${color}`}>
      {message}
    </div>
  );
};

export default GridAlertToast;
