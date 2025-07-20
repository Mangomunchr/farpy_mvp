
import VaultHUD from '../components/VaultHUD';
import LegacyScore from '../components/LegacyScore';
import LoreBox from '../components/LoreBox';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function HomeDashboard() {
  const { session } = useAuth();
  const [xp, setXP] = useState(0);

  useEffect(() => {
    supabase.from('profiles').select('xp').eq('id', session.user.id).single().then(({ data }) => {
      if (data) setXP(data.xp);
    });
  }, [session]);

  return (
    <div>
      <VaultHUD />
      <h1 className="text-xl font-bold mb-2">Welcome, Ritualist 🍋</h1>
      <LegacyScore xp={xp} />
      <LoreBox
        title="⛩️ Your Next Ritual"
        message="Choose to burn Mango to contribute to the Vault, or claim only if your XP is worthy."
      />
    </div>
  );
}
