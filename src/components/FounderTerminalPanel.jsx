import { useState } from "react";
import { functions } from "../firebase";
import { httpsCallable } from "firebase/functions";

export default function FounderTerminalPanel() {
  const [vaultMargin, setVaultMargin] = useState(0.3);
  const [referralCap, setReferralCap] = useState(0.055);
  const [log, setLog] = useState("");

  const pushConfig = async () => {
    const updateConfig = httpsCallable(functions, "updateFounderConfig");
    const result = await updateConfig({
      vaultMargin,
      referralCap
    });
    setLog(result.data.message || "Config pushed.");
  };

  return (
    <div>
      <h3>🛠 Founder Terminal</h3>
      <label>Vault Margin %</label>
      <input type="number" value={vaultMargin} onChange={e => setVaultMargin(parseFloat(e.target.value))} />
      <label>Referral Max %</label>
      <input type="number" value={referralCap} onChange={e => setReferralCap(parseFloat(e.target.value))} />
      <button onClick={pushConfig}>Apply</button>
      <p>{log}</p>
    </div>
  );
}
