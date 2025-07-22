
import React, { useState } from 'react';

function JobReceiver({ onReceive }) {
  const [jobIn, setJobIn] = useState(false);

  const handleReceive = () => {
    setJobIn(true);
    onReceive && onReceive();
    setTimeout(() => setJobIn(false), 3000);
  };

  return (
    <div className="text-center p-4 border border-zinc-700 rounded-lg bg-zinc-800">
      <button
        onClick={handleReceive}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
      >
        Receive Render Job
      </button>
      {jobIn && (
        <p className="text-green-300 mt-2 text-sm font-mono">🔥 Job accepted. Processing...</p>
      )}
    </div>
  );
}

export default JobReceiver;
