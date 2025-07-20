
import React from 'react';

function UserStatsCard({ xp, level, uptime, jobsCompleted }) {
  return (
    <div className="bg-zinc-900 p-4 rounded-xl text-white border border-zinc-700 text-sm">
      <div className="font-bold mb-2">📊 User Stats</div>
      <div>🧠 XP: {xp}</div>
      <div>🏅 Level: {level}</div>
      <div>⏱ Uptime: {uptime}%</div>
      <div>📦 Jobs Completed: {jobsCompleted}</div>
    </div>
  );
}

export default UserStatsCard;
