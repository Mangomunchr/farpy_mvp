
import React from 'react';

function StatusPill({ status }) {
  const color = status === "active" ? "bg-green-600" :
                status === "paused" ? "bg-yellow-500" : "bg-red-600";

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${color} text-white`}>
      {status.toUpperCase()}
    </span>
  );
}

export default StatusPill;
