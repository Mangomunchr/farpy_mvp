import { useState } from 'react';

export default function MangoLogStream() {
  const [lines] = useState([
    "→ NodeMonk XIII | burn.mango(5)",
    "→ Rendar 09 | bless.vault(12)",
    "→ MangoWeather | setStorm('moderate')"
  ]);

  return (
    <div className="border p-4 rounded-xl shadow bg-yellow-50">
      <h2 className="text-xl font-bold mb-2">📂 Mango Log Stream</h2>
      <ul>
        {lines.map((l, i) => <li key={i}>📝 {l}</li>)}
      </ul>
    </div>
  );
}
