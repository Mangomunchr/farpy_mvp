import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase";

export default function XPTracker() {
  const [xp, setXP] = useState(0);
  useEffect(() => {
    const fetchXP = async () => {
      const user = getAuth(app).currentUser;
      if (user) {
        const snap = await getDoc(doc(getFirestore(app), "users", user.uid));
        if (snap.exists()) setXP(snap.data().xp || 0);
      }
    };
    fetchXP();
  }, []);
  return (
    <p className="text-sm text-noxo-primary mt-2">⚡ XP: {xp}</p>
  );
}
