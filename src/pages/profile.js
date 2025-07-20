
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { session } = useAuth();
  const [profile, setProfile] = useState(null);
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    if (!session) return;
    const fetchProfile = async () => {
      const { data } = await supabase.from('profiles').select('*').eq('id', session.user.id).single();
      setProfile(data);
    };
    const fetchTokens = async () => {
      const { data } = await supabase.from('tokens').select('*').eq('user_id', session.user.id);
      setTokens(data || []);
    };
    fetchProfile();
    fetchTokens();
  }, [session]);

  return (
    <div className="p-6 text-noxo-primary">
      <h1 className="text-xl font-bold">👤 Profile</h1>
      {profile && (
        <div className="mt-4">
          <p>Email: {session.user.email}</p>
          <p>XP: {profile.xp}</p>
          <p>Role: {profile.role}</p>
        </div>
      )}
      <h2 className="mt-6 font-bold">🎟️ Tokens</h2>
      <ul className="text-sm">
        {tokens.map(t => (
          <li key={t.id}>+{t.amount} for {t.reason} ({new Date(t.created_at).toLocaleDateString()})</li>
        ))}
      </ul>
    </div>
  );
}
