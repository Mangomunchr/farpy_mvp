import { useState } from 'react';

export default function GPUPowerTrace() {
  const [trace] = useState("Wattage: 321W | Fan: 68% | Clock: 2100MHz");

  return (
    <div className="border p-4 rounded-xl shadow bg-stone-200">
      <h2 className="text-xl font-bold mb-2">⚡ GPU Trace</h2>
      <p>{trace}</p>
    </div>
  );
}
