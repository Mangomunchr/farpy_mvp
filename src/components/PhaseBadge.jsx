import React from 'react';

const PhaseBadge = ({ phase }) => {
  const colorMap = {
    "I": "bg-purple-700",
    "II": "bg-blue-700",
    "III": "bg-green-700",
    "ALPHA": "bg-pink-700",
    "BETA": "bg-orange-700"
  };

  return (
    <span className={\`px-2 py-1 rounded text-xs text-white \${colorMap[phase] || 'bg-gray-700'}\`}>
      PHASE {phase}
    </span>
  );
};

export default PhaseBadge;
