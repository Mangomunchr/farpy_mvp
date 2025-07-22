import React from 'react';

export default function AdminRitualConsoleLite() {
  return (
    <div className="bg-black text-white border border-noxo-primary rounded-xl p-4 max-w-xl mx-auto mt-8">
      <h2 className="text-lg font-bold mb-2">🛠 Admin Ritual Console</h2>
      <p className="text-sm mb-4">Toggle Chaos Events and manage ops.</p>
      <div className="space-y-2">
        <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded w-full">🔥 Trigger Chaos Ritual</button>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded w-full">💧 Cleanse System Logs</button>
        <button className="px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded w-full">📜 View All Jobs</button>
      </div>
    </div>
  );
}
