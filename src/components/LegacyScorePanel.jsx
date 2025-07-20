import { useState } from 'react';

export default function LegacyScorePanel() {
  const [score] = useState(1337);

  return (
    <div className="border p-4 rounded-xl shadow bg-purple-100">
      <h2 className="text-xl font-bold mb-2">🏅 Legacy Score</h2>
      <p>Your long-term ritual impact: {score} pts</p>
    </div>
  );
}
