
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function PatchNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    supabase
      .from('patch_notes')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data }) => setNotes(data || []));
  }, []);

  return (
    <div className="p-6 text-noxo-primary">
      <h1 className="text-xl font-bold">🛠️ Patch Notes</h1>
      <ul className="mt-4 space-y-1 text-sm">
        {notes.map(note => (
          <li key={note.id}>🔹 {note.message}</li>
        ))}
      </ul>
    </div>
  );
}
