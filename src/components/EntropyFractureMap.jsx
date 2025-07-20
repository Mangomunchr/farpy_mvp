import { useState } from 'react';

export default function EntropyFractureMap() {
  const [info] = useState("Zone breach at fracture node #X77");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🪨 Entropy Fracture</h2>
      <p>{info}</p>
    </div>
  );
}
