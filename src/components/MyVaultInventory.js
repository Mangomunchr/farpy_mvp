
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../context/AuthContext';

export default function MyVaultInventory() {
  const { session } = useAuth();
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    supabase
      .from('tokens')
      .select('*')
      .eq('user_id', session.user.id)
      .order('created_at', { ascending: false })
      .then(({ data }) => setTokens(data || []));
  }, [session]);

  return (
    <div className="text-sm mt-6 border border-noxo-accent p-4 rounded text-noxo-primary">
      <h3 className="font-bold mb-2">🎒 My Claimed Mango</h3>
      <ul className="space-y-1">
        {tokens.map(t => (
          <li key={t.id}>+{t.amount} — {t.reason} <span className="opacity-60 text-xs">({new Date(t.created_at).toLocaleDateString()})</span></li>
        ))}
      </ul>
    </div>
  );
}
