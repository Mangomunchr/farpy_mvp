
import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Burn() {
  const [status, setStatus] = useState(null);

  const handleBurn = async () => {
    const { error } = await supabase.rpc('burn_ritual');
    setStatus(error ? '🔥 Burn failed.' : '🔥 Ritual complete.');
  };

  return (
    <div className="p-6 text-noxo-primary">
      <h1 className="text-xl font-bold">🔥 Burn</h1>
      <button className="bg-noxo-accent text-black px-4 py-2 rounded" onClick={handleBurn}>
        Begin Ritual
      </button>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
