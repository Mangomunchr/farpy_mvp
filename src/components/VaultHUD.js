
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { getVaultIcon } from '../utils/vaultIcons';
import { useAuth } from '../context/AuthContext';

export default function VaultHUD() {
  const { session } = useAuth();
  const [vaultTotal, setVaultTotal] = useState(0);
  const [weather, setWeather] = useState('Normal');
  const [xp, setXP] = useState(0);

  useEffect(() => {
    const loadVault = async () => {
      const { data } = await supabase.from('vault_log').select('value');
      if (data) {
        const total = data.reduce((sum, v) => sum + v.value, 0);
        setVaultTotal(total);
      }
    };
    const loadWeather = async () => {
      const { data } = await supabase.from('vault').select('weather_status').limit(1).single();
      if (data) setWeather(data.weather_status);
    };
    const loadXP = async () => {
      const { data } = await supabase.from('profiles').select('xp').eq('id', session?.user.id).single();
      if (data) setXP(data.xp);
    };
    loadVault();
    loadWeather();
    loadXP();
  }, [session]);

  return (
    <div className="bg-[#111] border border-noxo-accent p-4 rounded text-sm flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
      <div>🍋 Vault Total: <strong>{vaultTotal}</strong></div>
      <div>🌤️ Weather: <strong>{getVaultIcon(weather)} {weather}</strong></div>
      <div>🧠 XP: <strong>{xp}</strong></div>
    </div>
  );
}
