import { useState } from 'react';

export default function SanctumDustFog() {
  const [info] = useState("Obfuscation: partial");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🌫️ Dust Layer</h2>
      <p>{info}</p>
    </div>
  );
}
