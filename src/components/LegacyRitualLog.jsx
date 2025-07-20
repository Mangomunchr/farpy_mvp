import React from 'react';

const LegacyRitualLog = ({ entries }) => {
  if (!entries?.length) return <p className="text-gray-500">No rituals performed.</p>;

  return (
    <div className="space-y-2 text-sm">
      {entries.map((entry, i) => (
        <div key={i} className="bg-gray-900 p-2 rounded border border-gray-700">
          <strong>{entry.type}</strong> at {new Date(entry.time).toLocaleTimeString()} — {entry.content}
        </div>
      ))}
    </div>
  );
};

export default LegacyRitualLog;
