import { useState } from "react";
import { httpsCallable } from "firebase/functions";
import { functions } from "../firebase";

export default function ChaosLockToggle() {
  const [locked, setLocked] = useState(false);

  const toggle = async () => {
    const fn = httpsCallable(functions, "toggleChaosLock");
    const res = await fn({ lock: !locked });
    setLocked(!locked);
    alert("Chaos is now " + (res.data.locked ? "LOCKED" : "UNLOCKED"));
  };

  return (
    <div>
      <h3>🧱 ChaosLock Override</h3>
      <button onClick={toggle}>{locked ? "Unlock Chaos" : "Lock Chaos"}</button>
    </div>
  );
}
