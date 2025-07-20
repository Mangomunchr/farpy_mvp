
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Vault() {
  const [vaultTotal, setVaultTotal] = useState(0);

  useEffect(() => {
    const fetchVault = async () => {
      const { data, error } = await supabase
        .from('vault_log')
        .select('value');
      if (!error) {
        const total = data.reduce((sum, row) => sum + row.value, 0);
        setVaultTotal(total);
      }
    };
    fetchVault();
  }, []);

  return (
    <div className="p-6 text-noxo-primary">
      <h1 className="text-xl font-bold">🏦 Vault</h1>
      <p>🍋 Total Mango in Vault: {vaultTotal}</p>
    </div>
  );
}
