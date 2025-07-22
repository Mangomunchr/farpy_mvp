
import React, { useState } from 'react';

function NodeMonkJoin({ onJoin }) {
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    setJoined(true);
    onJoin && onJoin();
  };

  return (
    <div className="text-center p-6 border border-zinc-700 bg-zinc-900 rounded-xl">
      <h2 className="text-white text-xl font-bold mb-2">NodeMonk Portal</h2>
      {joined ? (
        <p className="text-green-400 font-mono">🧠 NodeMonk active</p>
      ) : (
        <button
          onClick={handleJoin}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Connect GPU
        </button>
      )}
    </div>
  );
}

export default NodeMonkJoin;
