import { useState } from 'react';

export default function MonkThreadSignal() {
  const [info] = useState("Thread #19 vibrating");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🧵 Thread Signal</h2>
      <p>{info}</p>
    </div>
  );
}
