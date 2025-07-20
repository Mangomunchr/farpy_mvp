import { useState } from 'react';

export default function SigilFragmentTracker() {
  const [fragments] = useState("🔍 3 of 9 tracked | Zone: West")

  return (
    <div className="border p-4 rounded-xl shadow bg-pink-100">
      <h2 className="text-xl font-bold mb-2">🧩 Sigil Fragments</h2>
      <p>{fragments}</p>
    </div>
  );
}
