import { useState } from 'react';

export default function EntropyLureProbe() {
  const [info] = useState("Pulled signal from deep layer");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🎣 Entropy Lure</h2>
      <p>{info}</p>
    </div>
  );
}
