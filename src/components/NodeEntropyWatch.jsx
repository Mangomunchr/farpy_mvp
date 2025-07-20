import { useState } from 'react';

export default function NodeEntropyWatch() {
  const [entropy] = useState("📈 Entropy Curve: Rising");

  return (
    <div className="border p-4 rounded-xl shadow bg-sky-100">
      <h2 className="text-xl font-bold mb-2">♾️ Node Entropy</h2>
      <p>{entropy}</p>
    </div>
  );
}
