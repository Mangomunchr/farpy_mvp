
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../context/AuthContext';

export default function RitualTimeline() {
  const { session } = useAuth();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    supabase
      .from('events')
      .select('*')
      .eq('user_id', session.user.id)
      .order('created_at', { ascending: false })
      .then(({ data }) => setEvents(data || []));
  }, [session]);

  return (
    <div className="mt-6 text-sm text-noxo-primary border-t border-noxo-accent pt-4">
      <h3 className="font-bold mb-2">🧾 Ritual Timeline</h3>
      <ul className="space-y-1">
        {events.map(e => (
          <li key={e.id}>
            <strong>{e.type}</strong> — {new Date(e.created_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
