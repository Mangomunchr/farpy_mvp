import { useEffect, useState } from "react";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { app } from "../firebase";

const db = getFirestore(app);

export default function useUserData(userId = "live-client") {
  const [xp, setXp] = useState(0);
  const [beans, setBeans] = useState(1000);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", userId), (docSnap) => {
      const data = docSnap.data();
      if (data) {
        setXp(data.xp || 0);
        setBeans(data.beans || 1000);
      }
    });
    return () => unsub();
  }, [userId]);

  return { xp, beans };
}
