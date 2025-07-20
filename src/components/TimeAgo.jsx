
import React from 'react';

function TimeAgo({ timestamp }) {
  const seconds = Math.floor((Date.now() - new Date(timestamp)) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  let display = `${minutes}m ago`;
  if (hours > 0) display = `${hours}h ago`;
  if (minutes < 1) display = `just now`;

  return <span className="text-xs text-zinc-400">{display}</span>;
}

export default TimeAgo;
