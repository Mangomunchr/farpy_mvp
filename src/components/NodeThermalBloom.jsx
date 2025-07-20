import { useState } from 'react';

export default function NodeThermalBloom() {
  const [bloom] = useState("🌡️ Bloom Detected: Zone 2");

  return (
    <div className="border p-4 rounded-xl shadow bg-orange-200">
      <h2 className="text-xl font-bold mb-2">🌋 Thermal Bloom</h2>
      <p>{bloom}</p>
    </div>
  );
}
