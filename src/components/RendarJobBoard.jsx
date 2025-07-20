import useJobQueue from '../hooks/useJobQueue';

export default function RendarJobBoard({ id }) {
  const { jobs, submit } = useJobQueue(id);

  return (
    <div className="p-4 border rounded bg-slate-900 text-white">
      <h2 className="text-xl font-bold mb-2">🎯 Job Queue: {id}</h2>
      <button onClick={submit} className="mb-2 px-3 py-1 bg-blue-500 rounded">Submit Job</button>
      <ul className="text-sm space-y-1">
        {jobs.map((job, i) => (
          <li key={i} className={job.success ? 'text-green-400' : 'text-red-400'}>
            {job.id} — {job.success ? '✅' : '❌'} — {new Date(job.created).toLocaleTimeString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
