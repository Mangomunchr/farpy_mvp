import { useState } from 'react';

export default function SanctumTrialsPanel() {
  const [submitted, setSubmitted] = useState(false);
  const submitTrial = () => {
    setSubmitted(true);
    alert("🕊️ Trial request sent to Sanctum.");
  };

  return (
    <div className="border p-4 rounded-xl shadow bg-slate-100">
      <h2 className="text-xl font-bold mb-2">⚖️ Sanctum Trials</h2>
      {submitted ? (
        <p>🕯️ Awaiting Verdict...</p>
      ) : (
        <>
          <p>Challenge a penalty, submit redemption, or prove your honor.</p>
          <button onClick={submitTrial} className="mt-2 bg-slate-700 text-white px-3 py-1 rounded">
            Request Trial
          </button>
        </>
      )}
    </div>
  );
}
