import { useState } from 'react';

export default function NodeWeatherAdaptation() {
  const [mode] = useState("Mode: Rain Shield Activated");

  return (
    <div className="border p-4 rounded-xl shadow bg-blue-50">
      <h2 className="text-xl font-bold mb-2">☔ Node Adaptation</h2>
      <p>{mode}</p>
    </div>
  );
}
