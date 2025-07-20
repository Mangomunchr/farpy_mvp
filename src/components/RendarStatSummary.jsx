import { useState } from 'react';

export default function RendarStatSummary() {
  const [data] = useState({ submitted: 12, success: 11, failed: 1 });

  return (
    <div className="border p-4 rounded-xl shadow bg-lime-50">
      <h2 className="text-xl font-bold mb-2">🧑‍🚀 Rendar Summary</h2>
      <p>Jobs Submitted: {data.submitted}</p>
      <p>Successful: {data.success}</p>
      <p>Failed: {data.failed}</p>
    </div>
  );
}
