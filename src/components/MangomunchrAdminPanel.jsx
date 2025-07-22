import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore();

const MangomunchrAdminPanel = () => {
  const [rev, setRev] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const ref = doc(db, 'vaults/ops', 'mangomunchr.rev_share');
      const snap = await getDoc(ref);
      if (snap.exists()) setRev(snap.data().usd || 0);
    };
    fetch();
  }, []);

  return (
    <div className="text-sm text-yellow-300 p-4 border border-yellow-600 rounded bg-black">
      <h2 className="text-lg font-bold mb-2">👑 Mangomunchr Vault Access</h2>
      <p>🔒 Ops Revenue (USD): ${rev.toFixed(2)}</p>
    </div>
  );
};

export default MangomunchrAdminPanel;
