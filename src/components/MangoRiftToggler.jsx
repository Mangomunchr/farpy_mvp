import { useState } from 'react';

export default function MangoRiftToggler() {
  const [active, setActive] = useState(false);

  return (
    <div className="border p-4 rounded-xl shadow bg-rose-100">
      <h2 className="text-xl font-bold mb-2">🌀 Mango Rift</h2>
      <p>Status: {active ? "🟣 Active Rift" : "⚪ Sealed"}</p>
      <button onClick={() => setActive(!active)} className="mt-2 bg-rose-600 text-white px-3 py-1 rounded">
        Toggle Rift
      </button>
    </div>
  );
}
