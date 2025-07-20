
import React from 'react';

function UserProfileMini({ name, level }) {
  return (
    <div className="bg-zinc-800 p-3 rounded-xl text-white text-sm border border-zinc-700">
      <div className="font-semibold">{name}</div>
      <div className="text-zinc-400 text-xs">Level {level}</div>
    </div>
  );
}

export default UserProfileMini;
