import React, { useState } from 'react';

export default function JobSubmissionPanel({ onSubmit }) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt);
      setPrompt('');
    }
  };

  return (
    <div className="bg-black border border-noxo-accent rounded-xl p-4 mt-6 w-full max-w-xl mx-auto">
      <h2 className="text-lg font-bold text-white mb-2">🎨 Submit a Render Job</h2>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded bg-gray-800 text-white"
          placeholder="Enter your visual prompt or task..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-noxo-primary text-black rounded hover:bg-white transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
