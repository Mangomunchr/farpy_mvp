import React from 'react';

const BurnCooldownBadge = ({ secondsLeft }) => {
  if (!secondsLeft || secondsLeft <= 0) return null;
  return (
    <div className="text-red-400 text-xs">
      🕒 Burn cooldown: {secondsLeft}s remaining
    </div>
  );
};

export default BurnCooldownBadge;
