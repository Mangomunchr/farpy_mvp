import { useState } from 'react';

export default function NodeMonkStatSummary() {
  const [data] = useState({ claimed: 22, completed: 21, errors: 1 });

  return (
    <div className="border p-4 rounded-xl shadow bg-lime-50">
      <h2 className="text-xl font-bold mb-2">🧘 NodeMonk Summary</h2>
      <p>Jobs Claimed: {data.claimed}</p>
      <p>Completed: {data.completed}</p>
      <p>Errors: {data.errors}</p>
    </div>
  );
}
