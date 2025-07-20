import { useState } from 'react';

export default function RoleSigilDisplay() {
  const [sigil] = useState("🧙‍♂️ NodeMonk of the 7th Bloom");

  return (
    <div className="border p-4 rounded-xl shadow bg-purple-50">
      <h2 className="text-xl font-bold mb-2">🔰 Role Sigil</h2>
      <p>{sigil}</p>
    </div>
  );
}
