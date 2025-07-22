import React from 'react';

export default function GridStatusBar({ isConnected = true }) {
  return (
    <div className={`px-4 py-2 rounded text-sm ${isConnected ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
      {isConnected ? '🟢 Connected to Render Grid' : '🔴 Disconnected from Render Grid'}
    </div>
  );
}
