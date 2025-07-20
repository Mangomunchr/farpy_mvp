import { useState } from 'react';

export default function JobClaimList() {
  const [jobs, setJobs] = useState([
    { id: 'job1', name: 'Test Render A', speed: '1x', claimedBy: null },
    { id: 'job2', name: 'Test Render B', speed: '1x', claimedBy: null }
  ]);

  const claim = (jobId) => {
    const now = Date.now();
    setJobs(jobs.map(j =>
      j.id === jobId && !j.claimedBy
        ? { ...j, claimedBy: "nodeMonk1", claimedAt: now }
        : j
    ));
  };

  return (
    <div className="border p-4 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">Available Jobs</h2>
      {jobs.map(job => (
        <div key={job.id} className="mb-2 p-2 border rounded">
          <p><strong>{job.name}</strong> – Speed: {job.speed}</p>
          {job.claimedBy ? (
            <p className="text-gray-500">Claimed by {job.claimedBy}</p>
          ) : (
            <button onClick={() => claim(job.id)} className="bg-blue-600 text-white px-3 py-1 rounded">
              Claim Job
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
