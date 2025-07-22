import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const db = getFirestore();
const auth = getAuth();

const NodeMonkVaultPanel = () => {
  const [usd, setUSD] = useState(0);
  const [xp, setXP] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const ref = doc(db, 'vaults/ledger', user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setUSD(snap.data().usd_pending || 0);
        setXP(snap.data().xp || 0);
      }
    };
    fetch();
  }, []);

  return (
    <div className="text-sm text-noxo-primary p-4 border border-noxo-accent rounded">
      <h2 className="text-lg font-bold mb-2">🧘 NodeMonk Vault Panel</h2>
      <p>💵 USD Pending: ${usd.toFixed(2)}</p>
      <p>⚡ XP: {xp}</p>
    </div>
  );
};

export default NodeMonkVaultPanel;
