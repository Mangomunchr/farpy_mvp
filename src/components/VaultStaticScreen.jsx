import { useState } from 'react';

export default function VaultStaticScreen() {
  const [info] = useState("Desync: 0.22s jitter");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">📺 Static View</h2>
      <p>{info}</p>
    </div>
  );
}
