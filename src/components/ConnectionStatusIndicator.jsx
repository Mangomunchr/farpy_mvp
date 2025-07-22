import React from 'react';

export default function ConnectionStatusIndicator({ isOnline }) {
  return (
    <div className="text-sm flex items-center space-x-2 mt-4">
      <span className={`h-3 w-3 rounded-full ${isOnline ? 'bg-green-400' : 'bg-red-500'}`}></span>
      <span>{isOnline ? 'Connected to Render Grid' : 'Disconnected from Grid'}</span>
    </div>
  );
}
