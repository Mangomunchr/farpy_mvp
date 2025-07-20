import { useState } from 'react';

export default function VaultLeaderboard() {
  const [leaders] = useState([
    { id: "nodeMonk1", xp: 520 },
    { id: "rendar1", xp: 300 },
    { id: "monkZ", xp: 880 }
  ]);

  return (
    <div className="border p-4 rounded-xl shadow bg-lime-100">
      <h2 className="text-xl font-bold mb-2">🏆 Vault Leaderboard</h2>
      <ul>
        {leaders.map((user, i) => (
          <li key={i}>{i + 1}. {user.id} – {user.xp} XP</li>
        ))}
      </ul>
    </div>
  );
}
