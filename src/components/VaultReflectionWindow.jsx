import { useState } from 'react';

export default function VaultReflectionWindow() {
  const [view] = useState("🪞 Reflection: Layer 6 visible");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🪞 Reflection Window</h2>
      <p>{view}</p>
    </div>
  );
}
