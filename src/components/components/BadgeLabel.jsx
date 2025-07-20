
import React from 'react';

function BadgeLabel({ label, color = "blue" }) {
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-${color}-800 text-${color}-200`}>
      {label}
    </span>
  );
}

export default BadgeLabel;
