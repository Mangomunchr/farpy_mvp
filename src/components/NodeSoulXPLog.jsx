import React from 'react';

const NodeSoulXPLog = ({ logs }) => (
  <div className="bg-black border border-gray-700 text-xs p-2 rounded font-mono max-h-32 overflow-y-auto">
    {logs.length === 0 ? (
      <p className="text-gray-500">No XP recorded.</p>
    ) : (
      logs.map((log, i) => (
        <div key={i}>[{log.time}] +{log.amount} XP — {log.reason}</div>
      ))
    )}
  </div>
);

export default NodeSoulXPLog;
