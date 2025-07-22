
import React from 'react';
import TimeAgo from './TimeAgo';

function JobLogItem({ job }) {
  return (
    <div className="text-sm border-b border-zinc-700 py-2 flex justify-between text-white">
      <div>
        <div className="text-zinc-300">{job.prompt}</div>
        <div className="text-xs text-zinc-500"><TimeAgo timestamp={job.time} /></div>
      </div>
      <div className="text-green-400 font-bold text-xs self-center">{job.status}</div>
    </div>
  );
}

export default JobLogItem;
