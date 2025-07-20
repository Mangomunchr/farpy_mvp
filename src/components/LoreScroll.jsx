import React from 'react';

const LoreScroll = ({ text }) => (
  <div className="bg-gradient-to-br from-yellow-900 to-black border border-yellow-700 p-4 rounded text-yellow-200 font-mono text-sm leading-relaxed max-w-xl mx-auto">
    <pre>{text}</pre>
  </div>
);

export default LoreScroll;
