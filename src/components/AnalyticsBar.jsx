import React, { useEffect, useState } from 'react';
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';

const db = getFirestore();

const AnalyticsBar = () => {
  const [stats, setStats] = useState({ active: 0, rate: 0 });

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'system', 'analytics'), (docSnap) => {
      if (docSnap.exists()) setStats(docSnap.data());
    });
    return () => unsub();
  }, []);

  return (
    <div className="text-xs text-cyan-400">
      🧠 {stats.active} users | ⚡ {stats.rate} XP/hr
    </div>
  );
};

export default AnalyticsBar;
