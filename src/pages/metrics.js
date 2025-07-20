
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function MangoMetricsDashboard() {
  const [stats, setStats] = useState({ vault: 0, tokens: 0, users: 0, xpTotal: 0 });

  useEffect(() => {
    const load = async () => {
      const { data: vault } = await supabase.from('vault_log').select('value');
      const { data: tokens } = await supabase.from('tokens').select('amount');
      const { data: profiles } = await supabase.from('profiles').select('xp');

      const vaultSum = vault?.reduce((sum, v) => sum + v.value, 0) || 0;
      const tokenSum = tokens?.reduce((sum, t) => sum + t.amount, 0) || 0;
      const xpSum = profiles?.reduce((sum, p) => sum + p.xp, 0) || 0;

      setStats({
        vault: vaultSum,
        tokens: tokenSum,
        users: profiles?.length || 0,
        xpTotal: xpSum
      });
    };

    load();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 border border-noxo-accent rounded bg-black text-noxo-primary">
      <h1 className="text-2xl font-bold mb-4">📊 Mango Metrics</h1>
      <ul className="space-y-3 text-sm">
        <li>🍋 Total Vault Burned: <strong>{stats.vault}</strong></li>
        <li>🎁 Total Mango Claimed: <strong>{stats.tokens}</strong></li>
        <li>🧠 Total XP Earned: <strong>{stats.xpTotal}</strong></li>
        <li>👥 Total Rendarians: <strong>{stats.users}</strong></li>
      </ul>
      <p className="mt-6 text-xs text-noxo-accent/70">All values reflect live Supabase data.</p>
    </div>
  );
}
