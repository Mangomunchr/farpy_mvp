import { useState } from 'react';

export default function TemporalFluxSpire() {
  const [info] = useState("Burst clock near threshold");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">⏳ Flux Spire</h2>
      <p>{info}</p>
    </div>
  );
}
