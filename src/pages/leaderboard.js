
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    supabase
      .from('profiles')
      .select('display_name, xp')
      .order('xp', { ascending: false })
      .limit(20)
      .then(({ data }) => setUsers(data || []));
  }, []);

  return (
    <div className="p-6 text-noxo-primary">
      <h1 className="text-xl font-bold mb-4">🏆 Top XP Leaders</h1>
      <ol className="space-y-1 text-sm">
        {users.map((u, i) => (
          <li key={i}>
            {i + 1}. {u.display_name} — {u.xp} XP
          </li>
        ))}
      </ol>
    </div>
  );
}
