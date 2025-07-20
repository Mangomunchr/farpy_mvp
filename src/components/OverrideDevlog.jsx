import React from 'react';

const OverrideDevlog = ({ entries = [] }) => {
  return (
    <div className="bg-black border border-red-600 text-red-300 p-4 rounded text-xs font-mono space-y-1">
      <h3 className="font-bold mb-2">🔧 OVERRIDE DEVLOG</h3>
      {entries.length === 0 ? (
        <div className="text-gray-600">No overrides triggered.</div>
      ) : (
        entries.map((e, i) => (
          <div key={i}>[{new Date(e.time).toLocaleTimeString()}] {e.action}</div>
        ))
      )}
    </div>
  );
};

export default OverrideDevlog;
