import React from 'react';

const GridCooldownOverlay = ({ seconds }) => {
  if (seconds <= 0) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="text-red-500 text-lg font-bold">
        ⏳ Ritual Cooldown: {seconds}s
      </div>
    </div>
  );
};

export default GridCooldownOverlay;
