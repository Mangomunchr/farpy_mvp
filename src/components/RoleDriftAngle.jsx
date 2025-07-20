import { useState } from 'react';

export default function RoleDriftAngle() {
  const [angle] = useState("⧗ 17° off Monk vector");

  return (
    <div className="border p-4 rounded-xl shadow bg-fuchsia-100">
      <h2 className="text-xl font-bold mb-2">📐 Role Drift Angle</h2>
      <p>{angle}</p>
    </div>
  );
}
