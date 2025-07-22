import React from 'react';

export default function MinimalJobList({ jobs }) {
  return (
    <div className="bg-noxo-dark p-4 mt-4 rounded-xl border border-noxo-accent">
      <h3 className="font-bold text-sm mb-2">📋 Assigned Jobs</h3>
      <ul className="text-sm text-noxo-primary space-y-1">
        {jobs.length === 0 ? <li>No active jobs.</li> : jobs.map((j, i) => <li key={i}>🗒️ {j}</li>)}
      </ul>
    </div>
  );
}
