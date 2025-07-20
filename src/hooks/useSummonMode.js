import { useState } from 'react';

const multipliers = [1, 2, 5, 10, 25, 50, 100];

export default function useSummonMode() {
  const [tier, setTier] = useState(1);

  const nextTier = () => {
    const currentIndex = multipliers.indexOf(tier);
    const next = multipliers[(currentIndex + 1) % multipliers.length];
    setTier(next);
  };

  const isLocked = tier > 10; // Only allow up to 10x for now

  return { tier, nextTier, isLocked, multipliers };
}
