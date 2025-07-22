import React from 'react';

export default function VaultActivityLog({ logs }) {
  return (
    <div className="bg-noxo-dark p-6 mt-6 border border-noxo-accent rounded-xl w-full">
      <h2 className="text-xl font-bold mb-4">📜 Vault Activity</h2>
      <ul className="list-disc list-inside space-y-1">
        {logs.map((entry, i) => (
          <li key={i} className="text-noxo-primary text-sm">{entry}</li>
        ))}
      </ul>
    </div>
  );
}
