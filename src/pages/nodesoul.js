
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../context/AuthContext';

const SYMBOLS = ['🌀', '🔥', '🔒', '🧘', '📜', '🌑', '💀', '💬'];

export default function NodeSoulImprint() {
  const { session } = useAuth();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (!session) return;
    supabase
      .from('events')
      .select('*')
      .eq('user_id', session.user.id)
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setEvents(data || []);
      });
  }, [session]);

  const imprint = SYMBOLS[events.length % SYMBOLS.length];

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 border border-noxo-accent rounded bg-black text-noxo-primary">
      <h1 className="text-xl font-bold mb-4">🧬 NodeSoul Imprint</h1>
      <div className="text-5xl text-noxo-accent mb-4 text-center">{imprint}</div>
      <p className="text-sm italic mb-4 text-center opacity-80">Your NodeSoul reflects your ritual path.</p>
      <div className="border-t border-noxo-accent mt-6 pt-4">
        <h2 className="text-sm font-bold mb-2">📜 Ritual Trace Log</h2>
        <ul className="text-xs space-y-1 max-h-60 overflow-y-auto pr-1">
          {events.map(e => (
            <li key={e.id}>
              {new Date(e.created_at).toLocaleDateString()} — <strong>{e.type}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
