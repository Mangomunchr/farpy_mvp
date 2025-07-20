import { useState } from 'react';

export default function NodeSoulSummary() {
  const [traits] = useState(["Loyal", "Burn Disciplined", "Blessed"]);

  return (
    <div className="border p-4 rounded-xl shadow bg-indigo-100">
      <h2 className="text-xl font-bold mb-2">🧿 NodeSoul Summary</h2>
      <ul>
        {traits.map((t, i) => (
          <li key={i}>🌱 {t}</li>
        ))}
      </ul>
    </div>
  );
}
