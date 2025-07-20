
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function EventFeed({ userId }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (!userId) return;
    supabase
      .from('events')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(10)
      .then(({ data }) => setEvents(data || []));
  }, [userId]);

  return (
    <div className="p-4 border border-noxo-accent rounded mt-4 text-sm bg-black text-noxo-primary">
      <h3 className="font-bold mb-2">🧾 Recent Rituals</h3>
      <ul>
        {events.map(e => (
          <li key={e.id}>
            {e.type} — {new Date(e.created_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
