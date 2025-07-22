import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const db = getFirestore();

const Leaderboard = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snap = await getDocs(collection(db, 'xp'));
      const data = snap.docs.map(d => ({ uid: d.id, ...d.data() }));
      const sorted = data.sort((a, b) => b.value - a.value);
      setRows(sorted);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 text-noxo-primary text-sm">
      <h1 className="text-xl font-bold">🏆 Leaderboard</h1>
      <ol className="list-decimal ml-6 mt-2 space-y-1">
        {rows.map((r, i) => (
          <li key={i}>{r.uid.substring(0, 6)}... — {r.value} XP</li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
