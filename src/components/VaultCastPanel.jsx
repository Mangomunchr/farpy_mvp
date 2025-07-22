import { useState } from "react";
import { httpsCallable } from "firebase/functions";
import { functions } from "../firebase";

export default function VaultCastPanel() {
  const [message, setMessage] = useState("");

  const broadcast = async () => {
    const cast = httpsCallable(functions, "vaultCast");
    const res = await cast({ message });
    alert(res.data.message);
  };

  return (
    <div>
      <h3>📢 VaultCast Panel</h3>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="4" cols="40" />
      <button onClick={broadcast}>Send Broadcast</button>
    </div>
  );
}
