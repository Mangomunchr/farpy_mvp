import React from 'react';

const RitualXPBar = ({ xp }) => (
  <div className="w-full h-2 bg-gray-700 rounded-full mt-1">
    <div
      className="h-full bg-purple-500 rounded-full"
      style={{ width: \`\${Math.min(xp, 100)}%\` }}
    ></div>
  </div>
);

export default RitualXPBar;
