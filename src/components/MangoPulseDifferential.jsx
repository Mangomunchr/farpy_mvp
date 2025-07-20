import { useState } from 'react';

export default function MangoPulseDifferential() {
  const [diff] = useState("+1.42 MangoHz");

  return (
    <div className="border p-4 rounded-xl shadow bg-orange-50">
      <h2 className="text-xl font-bold mb-2">📡 Mango Differential</h2>
      <p>{diff}</p>
    </div>
  );
}
