
import React, { useEffect, useState } from 'react';

function RitualCooldownTimer({ initialTime }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="text-sm text-red-300 font-mono bg-zinc-900 p-2 rounded-xl border border-red-600">
      ⏳ Ritual Cooldown: {timeLeft > 0 ? `${timeLeft} sec` : "Ready to Burn"}
    </div>
  );
}

export default RitualCooldownTimer;
