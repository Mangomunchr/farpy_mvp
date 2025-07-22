import { useState } from "react";
import { functions } from "../firebase";
import { httpsCallable } from "firebase/functions";

export default function RedeemCode() {
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");

  const handleRedeem = async () => {
    const redeem = httpsCallable(functions, "redeemCode");
    const res = await redeem({ code });
    setMsg(res.data.success ? "Redeemed!" : "Invalid Code");
  };

  return (
    <div>
      <h4>Redeem Code</h4>
      <input value={code} onChange={(e) => setCode(e.target.value)} />
      <button onClick={handleRedeem}>Redeem</button>
      <p>{msg}</p>
    </div>
  );
}
