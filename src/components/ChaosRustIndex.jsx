import { useState } from 'react';

export default function ChaosRustIndex() {
  const [index] = useState("🧪 Corrosion Level: 0.003");

  return (
    <div className="border p-4 rounded-xl shadow bg-orange-100">
      <h2 className="text-xl font-bold mb-2">🧪 Chaos Rust Index</h2>
      <p>{index}</p>
    </div>
  );
}
