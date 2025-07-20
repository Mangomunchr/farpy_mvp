import { useState } from 'react';

export default function RoleSoulPrint() {
  const [info] = useState("Hash: 9xeef71bc90");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">📜 Soulprint</h2>
      <p>{info}</p>
    </div>
  );
}
