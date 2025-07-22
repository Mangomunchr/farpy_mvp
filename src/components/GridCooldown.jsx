import React, { useEffect, useState } from 'react';
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';

const db = getFirestore();

const GridCooldown = () => {
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'system', 'cooldown'), (docSnap) => {
      if (docSnap.exists()) {
        setCooldown(docSnap.data().seconds || 0);
      }
    });
    return () => unsub();
  }, []);

  return cooldown > 0 ? (
    <div className="text-xs text-red-400 animate-pulse">
      ⏳ Grid Cooldown Active: {cooldown}s
    </div>
  ) : null;
};

export default GridCooldown;
