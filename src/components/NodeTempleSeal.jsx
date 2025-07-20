
import React from 'react';

function NodeTempleSeal({ activated }) {
  return (
    <div className={`p-4 rounded-xl text-center border-2 ${activated ? 'border-cyan-500 bg-cyan-900' : 'border-zinc-700 bg-zinc-800'} text-white`}>
      <div className="text-xl mb-1">🔗 NodeTemple Seal</div>
      <div className="text-sm">
        {activated ? "Seal Engaged — Core Path Stable." : "Seal Dormant — Ritual Not Complete."}
      </div>
    </div>
  );
}

export default NodeTempleSeal;
