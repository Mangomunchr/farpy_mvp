import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const db = getFirestore();
const auth = getAuth();

const CoolBeansWallet = () => {
  const [coolbeans, setCoolbeans] = useState(0);

  useEffect(() => {
    const load = async () => {
      const user = auth.currentUser;
      if (!user) return;
      const ref = doc(db, 'wallets', user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) setCoolbeans(snap.data().coolbeans || 0);
    };
    load();
  }, []);

  return (
    <div className="text-xs text-green-400">
      🫘 CoolBeans: {coolbeans}
    </div>
  );
};

export default CoolBeansWallet;
