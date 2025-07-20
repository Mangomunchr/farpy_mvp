import { useState } from 'react';

export default function UserStats() {
  const [user] = useState({
    id: 'nodeMonk1',
    xp: 140,
    credits: 5,
    level: 'NodeMonk I'
  });

  return (
    <div className="border p-4 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">User Stats</h2>
      <p>ID: {user.id}</p>
      <p>XP: {user.xp}</p>
      <p>Credits: {user.credits}</p>
      <p>Level: {user.level}</p>
    </div>
  );
}
