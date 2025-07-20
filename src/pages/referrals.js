
import { useState } from 'react';

export default function ReferralPanel() {
  const [code] = useState(() => {
    const cached = localStorage.getItem('referral_code');
    if (cached) return cached;
    const newCode = 'MANGO-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    localStorage.setItem('referral_code', newCode);
    return newCode;
  });

  const [referrals, setReferrals] = useState(() => {
    const raw = localStorage.getItem('referrals');
    return raw ? JSON.parse(raw) : [];
  });

  const addReferral = () => {
    const name = prompt('Enter username who used your code:');
    if (!name) return;
    const updated = [...referrals, name];
    setReferrals(updated);
    localStorage.setItem('referrals', JSON.stringify(updated));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border border-noxo-accent rounded bg-black text-noxo-primary">
      <h1 className="text-xl font-bold mb-4">💬 Invite & Referral Panel</h1>
      <p className="text-sm mb-2">Your referral code:</p>
      <div className="bg-[#111] border border-noxo-accent text-center p-3 rounded font-mono text-noxo-accent">
        {code}
      </div>
      <button
        onClick={addReferral}
        className="mt-4 bg-noxo-accent text-black px-4 py-2 text-sm rounded"
      >
        + Add Referral (manual)
      </button>

      <div className="mt-6">
        <h3 className="text-sm font-bold mb-2">📜 Your Referrals:</h3>
        <ul className="text-xs space-y-1">
          {referrals.length > 0 ? (
            referrals.map((name, i) => <li key={i}>🌱 {name}</li>)
          ) : (
            <li className="opacity-50 italic">None yet</li>
          )}
        </ul>
      </div>
    </div>
  );
}
