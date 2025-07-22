import React from 'react';

const GridPatchLog = ({ patches }) => (
  <div className="text-xs text-gray-400 font-mono max-h-24 overflow-y-auto border-t border-gray-600 mt-2 pt-2">
    {patches.map((p, i) => (
      <div key={i}>🔧 v{p.version}: {p.message}</div>
    ))}
  </div>
);

export default GridPatchLog;
