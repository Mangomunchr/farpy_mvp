import React from 'react';

export default function JobSubmitBox() {
  return (
    <div className="border border-noxo-accent bg-noxo-dark p-4 rounded-xl mt-6">
      <h2 className="font-bold mb-2 text-sm">➕ Submit New Job</h2>
      <input
        placeholder="Job Prompt"
        className="w-full p-2 bg-gray-800 text-white rounded mb-2"
      />
      <button className="bg-noxo-primary text-black px-4 py-2 rounded-lg font-bold w-full">
        🚀 Send Job
      </button>
    </div>
  );
}
