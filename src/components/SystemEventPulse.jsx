
import React from 'react';

function SystemEventPulse({ event }) {
  if (!event) return null;

  return (
    <div className="bg-indigo-900 text-indigo-300 border border-indigo-600 p-3 rounded-xl text-center text-sm animate-pulse shadow-md">
      ⚡ System Event: <strong>{event}</strong> is now active.
    </div>
  );
}

export default SystemEventPulse;
