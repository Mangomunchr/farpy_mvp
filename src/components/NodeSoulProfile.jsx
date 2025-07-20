
import React from 'react';

function NodeSoulProfile({ name, traits, uptime }) {
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-4 rounded-xl text-sm text-white border border-zinc-600">
      <div className="text-lg font-bold mb-2">🧬 NodeSoul Profile</div>
      <div className="mb-1">🧠 Name: <strong>{name}</strong></div>
      <div className="mb-1">📈 Uptime: {uptime}%</div>
      <div className="mb-1">🔮 Traits:</div>
      <ul className="ml-4 list-disc text-zinc-300">
        {traits.map((trait, idx) => (
          <li key={idx}>{trait}</li>
        ))}
      </ul>
    </div>
  );
}

export default NodeSoulProfile;
