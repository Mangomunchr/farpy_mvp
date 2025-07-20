
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../context/AuthContext';
import LegacyScore from '../components/LegacyScore';

export default function NodeMonkConsole() {
  const { session } = useAuth();
  const [xp, setXP] = useState(0);
  const [streak, setStreak] = useState(0);
  const [role, setRole] = useState('rendar');

  useEffect(() => {
    if (!session) return;

    supabase
      .from('profiles')
      .select('xp, role')
      .eq('id', session.user.id)
      .single()
      .then(({ data }) => {
        if (data) {
          setXP(data.xp);
          setRole(data.role);
        }
      });

    supabase
      .from('events')
      .select('*')
      .eq('user_id', session.user.id)
      .eq('type', 'burn')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        if (!data) return;
        const today = new Date().toDateString();
        const streakDays = [...new Set(data.map(e => new Date(e.created_at).toDateString()))];
        const streakCount = streakDays.includes(today) ? streakDays.length : 0;
        setStreak(streakCount);
      });
  }, [session]);

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 border border-noxo-accent rounded bg-black text-noxo-primary">
      <h1 className="text-xl font-bold mb-4">🧘 NodeMonk Console</h1>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>XP:</strong> {xp}</p>
      <p><strong>Streak:</strong> {streak} day{streak === 1 ? '' : 's'}</p>
      <LegacyScore xp={xp} />
      <div className="mt-4 text-sm text-noxo-accent italic">“Those who persist in ritual become guardians of balance.”</div>
    </div>
  );
}
