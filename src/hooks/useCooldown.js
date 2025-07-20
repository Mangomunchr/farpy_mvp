import { useState, useEffect } from 'react';

export default function useCooldown(seconds) {
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown > 0) {
      const interval = setInterval(() => setCooldown((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [cooldown]);

  const triggerCooldown = () => {
    setCooldown(seconds);
  };

  return { cooldown, triggerCooldown };
}
