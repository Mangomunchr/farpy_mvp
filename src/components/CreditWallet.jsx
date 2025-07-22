import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const db = getFirestore();
const auth = getAuth();

const CreditWallet = () => {
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const user = auth.currentUser;
      if (!user) return;
      const ref = doc(db, 'wallets', user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) setCredits(snap.data().balance || 0);
    };
    fetch();
  }, []);

  return (
    <div className="text-xs text-blue-300">💳 Credits: {credits}</div>
  );
};

export default CreditWallet;
