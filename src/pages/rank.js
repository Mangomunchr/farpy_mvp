
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function XPLeaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    supabase
      .from('profiles')
      .select('display_name, xp')
      .order('xp', { ascending: false })
      .limit(100)
      .then(({ data }) => {
        if (data) setUsers(data);
      });
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-black text-noxo-primary border border-noxo-accent rounded">
      <h1 className="text-xl font-bold mb-4">📈 XP Leaderboard</h1>
      <ol className="text-sm space-y-2">
        {users.map((u, i) => (
          <li key={i} className="flex justify-between border-b border-noxo-accent pb-1">
            <span>#{i + 1} {u.display_name || 'Unnamed'}</span>
            <span className="text-noxo-accent font-mono">{u.xp} XP</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
