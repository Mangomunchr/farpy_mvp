import { useState } from 'react';

export default function MangoLockToggle() {
  const [locked, setLocked] = useState(false);

  return (
    <div className="border p-4 rounded-xl shadow bg-red-100">
      <h2 className="text-xl font-bold mb-2">🔐 Mango Lock</h2>
      <p>Status: {locked ? "LOCKED 🔒" : "UNLOCKED 🔓"}</p>
      <button onClick={() => setLocked(!locked)} className="mt-2 bg-red-500 text-white px-4 py-1 rounded">
        Toggle Lock
      </button>
    </div>
  );
}
