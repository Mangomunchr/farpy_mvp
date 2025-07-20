
import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Claim() {
  const [status, setStatus] = useState(null);

  const handleClaim = async () => {
    const { data, error } = await supabase.rpc('claim_vault');
    if (error) {
      setStatus('❌ Claim failed.');
    } else {
      setStatus(`✅ Claimed ${data[0].amount} MANGO`);
    }
  };

  return (
    <div className="p-6 text-noxo-primary">
      <h1 className="text-xl font-bold">🎁 Claim</h1>
      <button className="bg-noxo-accent text-black px-4 py-2 rounded" onClick={handleClaim}>
        Claim Vault Rewards
      </button>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
