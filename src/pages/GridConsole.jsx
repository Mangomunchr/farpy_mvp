import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GridConsole = () => {
  const [jobs, setJobs] = useState([]);
  const [vault, setVault] = useState(0);
  const [input, setInput] = useState('');
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axios.get('/api/job-log');
      setJobs(res.data.slice().reverse());
    };
    const fetchVault = async () => {
      const res = await axios.get('/api/vault');
      setVault(res.data.earnings);
    };
    fetchJobs();
    fetchVault();
    const interval = setInterval(() => {
      fetchJobs();
      fetchVault();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async () => {
    if (!input) return;
    await axios.post('/api/submit-job', {
      content: input,
      speed,
      userType: 'Rendar'
    });
    setInput('');
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-2">🔥 Farpy Grid</h1>
      <p className="text-lg text-gray-300">Submit GPU Jobs. Fill the Vault.</p>

      <div className="mt-4 bg-gray-900 p-4 rounded-lg max-w-lg">
        <div className="text-2xl font-bold text-yellow-400 mb-2">Vault: ${vault.toFixed(2)}</div>
        <textarea
          placeholder="What do you want rendered?"
          className="w-full p-2 text-black rounded mb-2"
          rows={3}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex items-center space-x-4">
          <select
            value={speed}
            onChange={(e) => setSpeed(parseInt(e.target.value))}
            className="p-2 text-black rounded"
          >
            <option value={1}>1x</option>
            <option value={2}>2x</option>
            <option value={5}>5x</option>
          </select>
          <button
            onClick={handleSubmit}
            className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
          >
            Submit Job
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">📡 Recent Grid Jobs</h2>
        <ul className="text-sm space-y-2">
          {jobs.map((job, i) => (
            <li key={i} className="bg-gray-800 p-2 rounded">
              [{new Date(job.timestamp).toLocaleTimeString()}] <strong>{job.userType}</strong> @ {job.speed}x – {job.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GridConsole;
