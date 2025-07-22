import React from 'react';

export default function NodeMonkStatusPanel({ jobsRunning = 0, earnings = 0 }) {
  return (
    <div className="bg-gray-950 text-white rounded-xl p-4 border border-green-400 shadow-md w-full max-w-xl mx-auto mt-6">
      <h2 className="text-lg font-bold mb-2">🧘 NodeMonk Status</h2>
      <p className="text-sm">🌀 Jobs Running: <span className="font-bold text-blue-300">{jobsRunning}</span></p>
      <p className="text-sm">💵 Earnings: <span className="font-bold text-green-300">${earnings.toFixed(2)}</span></p>
    </div>
  );
}
