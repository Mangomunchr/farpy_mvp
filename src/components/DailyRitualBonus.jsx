import { useState } from 'react';

export default function DailyRitualBonus() {
  const [claimed, setClaimed] = useState(false);

  return (
    <div className="border p-4 rounded-xl shadow bg-yellow-100">
      <h2 className="text-xl font-bold mb-2">📅 Daily Ritual Bonus</h2>
      {claimed ? (
        <p>✅ Bonus already claimed today.</p>
      ) : (
        <button onClick={() => setClaimed(true)} className="bg-yellow-500 text-white px-3 py-1 rounded">
          Claim 5 XP
        </button>
      )}
    </div>
  );
}
