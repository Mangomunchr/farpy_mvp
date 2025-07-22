import React from 'react';

export default function JobSummaryCard({ id, status, prompt }) {
  return (
    <div className="bg-gray-900 border border-noxo-accent p-4 rounded-xl text-sm text-noxo-primary mb-2">
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Prompt:</strong> {prompt}</p>
    </div>
  );
}
