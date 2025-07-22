import { useState } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { functions } from "../firebase";

export default function JobSubmitter() {
  const [beans, setBeans] = useState(300);

  const handleSubmit = async () => {
    const submitJob = httpsCallable(functions, "submitJob");
    const result = await submitJob({
      userId: "live-client",
      renderSpec: { resolution: "4K", frames: 800 },
      beansUsed: beans
    });
    alert("Job Submitted: " + result.data.jobId);
  };

  return (
    <div>
      <h3>Submit Render Job</h3>
      <input type="number" value={beans} onChange={(e) => setBeans(Number(e.target.value))} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
