import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc, updateDoc, increment } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const db = getFirestore();
const auth = getAuth();

const InviteTracker = () => {
  const [invites, setInvites] = useState(0);

  useEffect(() => {
    const load = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const ref = doc(db, 'invites', user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) setInvites(snap.data().count || 0);
    };
    load();
  }, []);

  const incrementInvite = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const ref = doc(db, 'invites', user.uid);
    await updateDoc(ref, { count: increment(1) });
    const snap = await getDoc(ref);
    setInvites(snap.data().count);
  };

  return (
    <div className="text-xs text-blue-300 mt-1">
      🫂 Invites: {invites} <button onClick={incrementInvite} className="ml-2 px-2 py-1 text-xs bg-blue-800 text-white rounded">+1</button>
    </div>
  );
};

export default InviteTracker;
