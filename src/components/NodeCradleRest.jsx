import { useState } from 'react';

export default function NodeCradleRest() {
  const [info] = useState("Dormancy: enabled | warm lock");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🛏️ Node Cradle</h2>
      <p>{info}</p>
    </div>
  );
}
