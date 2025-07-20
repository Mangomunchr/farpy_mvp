import { useState } from 'react';

export default function MonkFractureStatus() {
  const [fracture] = useState("⚠️ Microfracture (Cooldown pending)");

  return (
    <div className="border p-4 rounded-xl shadow bg-rose-200">
      <h2 className="text-xl font-bold mb-2">🩻 Monk Fracture</h2>
      <p>{fracture}</p>
    </div>
  );
}
