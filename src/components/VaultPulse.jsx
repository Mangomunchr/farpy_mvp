
import React, { useState, useEffect } from 'react';

function VaultPulse() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => (prev + Math.random() * 0.5) % 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-zinc-950 p-4 rounded-xl border border-purple-600 text-purple-300 text-sm">
      <div className="font-semibold mb-2">💓 Vault Pulse</div>
      <div className="h-3 w-full bg-purple-900 rounded-lg overflow-hidden">
        <div
          className="h-full bg-purple-500 transition-all duration-1000"
          style={{ width: `${pulse.toFixed(1)}%` }}
        />
      </div>
      <div className="text-right mt-1">{pulse.toFixed(1)}% energy</div>
    </div>
  );
}

export default VaultPulse;
