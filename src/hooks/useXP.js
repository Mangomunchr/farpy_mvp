import { useState, useEffect } from 'react';

export default function useXP() {
  const [xp, setXP] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('farpy_xp');
    if (stored) setXP(parseInt(stored));
  }, []);

  const addXP = (amount) => {
    const newXP = xp + amount;
    setXP(newXP);
    localStorage.setItem('farpy_xp', newXP.toString());
  };

  return { xp, addXP };
}
