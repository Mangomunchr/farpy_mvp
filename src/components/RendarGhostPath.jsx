import { useState } from 'react';

export default function RendarGhostPath() {
  const [info] = useState("Residual motion x2 loop seen");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">👻 Ghost Path</h2>
      <p>{info}</p>
    </div>
  );
}
