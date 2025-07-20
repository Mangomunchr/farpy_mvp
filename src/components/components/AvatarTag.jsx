
import React from 'react';

function AvatarTag({ name }) {
  const initials = name.split(" ").map(n => n[0]).join("").toUpperCase();
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-sm">
        {initials}
      </div>
      <span className="text-white text-sm">{name}</span>
    </div>
  );
}

export default AvatarTag;
