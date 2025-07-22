import React from 'react';

const FlameRegenBar = ({ regen }) => (
  <div className="w-full h-1 bg-black rounded-full overflow-hidden mt-2">
    <div className="h-full bg-red-400" style={{ width: \`\${regen}%\` }}></div>
  </div>
);

export default FlameRegenBar;
