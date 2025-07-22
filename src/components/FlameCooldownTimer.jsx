import React, { useEffect, useState } from 'react';

const FlameCooldownTimer = ({ initial = 30 }) => {
  const [seconds, setSeconds] = useState(initial);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xs text-red-400 mt-2">
      🔥 Cooldown: {seconds}s
    </div>
  );
};

export default FlameCooldownTimer;
