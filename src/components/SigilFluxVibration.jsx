import { useState } from 'react';

export default function SigilFluxVibration() {
  const [info] = useState("Tone: violet | flux strength: medium");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🎛️ Sigil Vibe</h2>
      <p>{info}</p>
    </div>
  );
}
