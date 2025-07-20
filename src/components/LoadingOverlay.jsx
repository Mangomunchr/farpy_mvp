import React from 'react';

const LoadingOverlay = ({ show }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="text-white text-xl animate-pulse">🌀 Processing Ritual...</div>
    </div>
  );
};

export default LoadingOverlay;
