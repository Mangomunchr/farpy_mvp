import { useState } from 'react';

export default function RoleCycleLock() {
  const [info] = useState("Loop: 5 | Lock status: HARD");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🔁 Role Cycle Lock</h2>
      <p>{info}</p>
    </div>
  );
}
