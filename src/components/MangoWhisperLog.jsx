import React from 'react';

const MangoWhisperLog = ({ messages }) => (
  <div className="text-xs text-yellow-300 font-mono space-y-1 max-h-24 overflow-y-auto">
    {messages.map((m, i) => <div key={i}>🥭 {m}</div>)}
  </div>
);

export default MangoWhisperLog;
