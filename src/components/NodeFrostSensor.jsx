import { useState } from 'react';

export default function NodeFrostSensor() {
  const [frost] = useState("🧊 Cold Spike Detected");

  return (
    <div className="border p-4 rounded-xl shadow bg-blue-200">
      <h2 className="text-xl font-bold mb-2">❄️ Node Frost Sensor</h2>
      <p>{frost}</p>
    </div>
  );
}
