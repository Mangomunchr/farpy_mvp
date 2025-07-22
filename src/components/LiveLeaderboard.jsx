import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";

export default function LiveLeaderboard() {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const ref = collection(db, "users");
      const q = query(ref, orderBy("xp", "desc"), limit(10));
      const snap = await getDocs(q);
      const users = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTopUsers(users);
    };
    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h3>Live NodeMuncher Leaderboard</h3>
      <ol>
        {topUsers.map((u, i) => (
          <li key={u.id}>{u.id} — {u.xp} XP</li>
        ))}
      </ol>
    </div>
  );
}
