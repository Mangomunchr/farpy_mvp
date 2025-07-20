import { useState } from 'react';

export default function CoreRitualFocus() {
  const [info] = useState("Clarity: 92.2%");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🧘 Ritual Focus</h2>
      <p>{info}</p>
    </div>
  );
}
