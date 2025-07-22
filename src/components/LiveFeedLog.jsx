import React from 'react';

export default function LiveFeedLog({ entries }) {
  return (
    <div className="bg-noxo-dark p-4 rounded-lg border border-noxo-accent text-sm max-h-64 overflow-y-auto">
      <h2 className="font-bold mb-2">📡 Live Job Feed</h2>
      <ul className="space-y-1">
        {entries.map((e, i) => (
          <li key={i}>[Log] {e}</li>
        ))}
      </ul>
    </div>
  );
}
