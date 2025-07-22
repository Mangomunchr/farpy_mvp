import React, { useState, useEffect } from 'react';

const CooldownRateLimit = () => {
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const trigger = () => {
    if (cooldown === 0) {
      setCooldown(10); // 10s lock
    }
  };

  return (
    <div className="mt-2 text-xs">
      <button
        onClick={trigger}
        disabled={cooldown > 0}
        className="bg-red-800 px-3 py-1 text-white text-xs rounded"
      >
        🔥 Burn
      </button>
      {cooldown > 0 && <span className="ml-2 text-red-400">Cooldown: {cooldown}s</span>}
    </div>
  );
};

export default CooldownRateLimit;
