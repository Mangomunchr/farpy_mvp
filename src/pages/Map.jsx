import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Map = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const res = await axios.get('/api/job-log');
      setLogs(res.data.slice().reverse());
    };
    fetchLogs();
    const interval = setInterval(fetchLogs, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-4">🧭 Grid Activity Log</h1>
      <ul className="space-y-2 text-sm">
        {logs.map((job, i) => (
          <li key={i} className="bg-gray-800 p-3 rounded border border-gray-700">
            <strong>{job.userType}</strong> @ {job.speed}x — {job.content} <span className="text-gray-400">[{new Date(job.timestamp).toLocaleTimeString()}]</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Map;
