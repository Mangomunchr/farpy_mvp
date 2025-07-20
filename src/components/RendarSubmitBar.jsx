
import React, { useState } from 'react';

function RendarSubmitBar({ onSubmit }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {
    if (prompt.trim()) {
      onSubmit(prompt);
      setPrompt("");
    }
  };

  return (
    <div className="flex items-center gap-2 bg-zinc-800 p-3 rounded-xl">
      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="flex-grow p-2 rounded-lg bg-zinc-700 text-white text-sm"
        placeholder="Describe your dragon to slay..."
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
      >
        Submit Job
      </button>
    </div>
  );
}

export default RendarSubmitBar;
