import React from 'react';

const LeaderboardCard = ({ username, xp, rank }) => (
  <div className="bg-black border border-yellow-600 text-yellow-100 p-3 rounded text-sm mb-2">
    #{rank} — <strong>{username}</strong><br/>
    🔥 XP: {xp}
  </div>
);

export default LeaderboardCard;
