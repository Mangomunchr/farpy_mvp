import { useState } from 'react';

export default function MemoryMirrorLoop() {
  const [info] = useState("Reflection stable – echo duality intact");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🪞 Mirror Loop</h2>
      <p>{info}</p>
    </div>
  );
}
