import { useState } from 'react';

export default function BurnTetherSnap() {
  const [info] = useState("Last burn anchor severed");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">✂️ Tether Snap</h2>
      <p>{info}</p>
    </div>
  );
}
