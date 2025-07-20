import { useState } from 'react';

export default function NodeArchetypePreview() {
  const [archetype] = useState("🌿 Flamewalker Monk");

  return (
    <div className="border p-4 rounded-xl shadow bg-lime-100">
      <h2 className="text-xl font-bold mb-2">🔮 Node Archetype</h2>
      <p>Path: {archetype}</p>
    </div>
  );
}
