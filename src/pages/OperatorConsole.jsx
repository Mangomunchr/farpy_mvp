import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OperatorConsole = () => {
  const [vault, setVault] = useState(0);
  const [logs, setLogs] = useState([]);
  const [delta, setDelta] = useState(0);

  const fetchData = async () => {
    const vaultRes = await axios.get('/api/vault');
    const logRes = await axios.get('/api/job-log');
    setVault(vaultRes.data.earnings);
    setLogs(logRes.data.slice().reverse());
  };

  const injectVault = async () => {
    await axios.post('/api/admin/inject', { amount: parseFloat(delta) });
    setDelta(0);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-4">🛠️ Operator Console</h1>
      <div className="mb-4">
        <div className="text-green-400 text-xl mb-2">Current Vault: ${vault.toFixed(2)}</div>
        <div className="flex space-x-2">
          <input
            type="number"
            value={delta}
            onChange={(e) => setDelta(e.target.value)}
            className="text-black px-2 py-1 rounded"
            placeholder="Amount"
          />
          <button onClick={injectVault} className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600">
            Inject Vault $
          </button>
        </div>
      </div>
      <h2 className="text-xl font-bold mt-6 mb-2">📜 Recent Jobs</h2>
      <ul className="text-sm space-y-2">
        {logs.map((job, i) => (
          <li key={i} className="bg-gray-800 p-2 rounded border border-gray-700">
            [{new Date(job.timestamp).toLocaleTimeString()}] <strong>{job.userType}</strong> @ {job.speed}x — {job.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OperatorConsole;
