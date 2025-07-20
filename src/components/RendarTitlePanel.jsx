import { useState } from 'react';

export default function RendarTitlePanel() {
  const [title] = useState("🎖️ Echo Scribe");

  return (
    <div className="border p-4 rounded-xl shadow bg-fuchsia-100">
      <h2 className="text-xl font-bold mb-2">📛 Rendar Title</h2>
      <p>{title}</p>
    </div>
  );
}
