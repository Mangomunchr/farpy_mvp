import { useState } from 'react';

export default function FlameRippleMeter() {
  const [info] = useState("Heat variation ±3.3C across grid");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🔥 Ripple Meter</h2>
      <p>{info}</p>
    </div>
  );
}
