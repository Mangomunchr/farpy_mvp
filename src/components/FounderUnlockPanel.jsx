import { useState } from "react";
import { httpsCallable } from "firebase/functions";
import { functions } from "../firebase";

export default function FounderUnlockPanel() {
  const [uid, setUid] = useState("");
  const [xp, setXp] = useState(100);

  const inject = async () => {
    const fn = httpsCallable(functions, "injectXP");
    const res = await fn({ uid, amount: xp });
    alert(res.data.message || "XP Injected");
  };

  return (
    <div>
      <h3>🔐 Founder XP Injector</h3>
      <input placeholder="User ID" value={uid} onChange={(e) => setUid(e.target.value)} />
      <input type="number" value={xp} onChange={(e) => setXp(Number(e.target.value))} />
      <button onClick={inject}>Inject XP</button>
    </div>
  );
}
