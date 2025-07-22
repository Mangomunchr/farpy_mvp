
import React from 'react';
import JobLogItem from './JobLogItem';

function JobLogFeed({ jobs }) {
  if (!jobs.length) return <div className="text-zinc-500 text-sm italic">No jobs submitted yet.</div>;
  return (
    <div className="bg-zinc-900 rounded-xl p-3 border border-zinc-700 max-h-[300px] overflow-y-auto space-y-2">
      {jobs.map((job, i) => <JobLogItem key={i} job={job} />)}
    </div>
  );
}

export default JobLogFeed;
