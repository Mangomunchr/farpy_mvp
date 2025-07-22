import { useState } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { functions } from "../firebase";

export default function NodeMuncherPanel() {
  const [jobId, setJobId] = useState("");

  const handleClaim = async () => {
    const fn = httpsCallable(functions, "claimJob");
    const res = await fn({ jobId, nodeId: "node-001" });
    alert("Job Claimed");
  };

  const handleComplete = async () => {
    const fn = httpsCallable(functions, "completeJob");
    const res = await fn({
      jobId,
      userId: "live-client",
      referrerId: "",
      reward: 600
    });
    alert("Job Completed");
  };

  return (
    <div>
      <h3>NodeMuncher Panel</h3>
      <input type="text" placeholder="Job ID" value={jobId} onChange={(e) => setJobId(e.target.value)} />
      <button onClick={handleClaim}>Claim</button>
      <button onClick={handleComplete}>Complete</button>
    </div>
  );
}
