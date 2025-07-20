
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function AdminConsole() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [xp, setXP] = useState(0);
  const [role, setRole] = useState('');

  useEffect(() => {
    supabase.from('profiles').select('id, display_name, xp, role').then(({ data }) => {
      if (data) setUsers(data);
    });
  }, []);

  const selectUser = (u) => {
    setSelected(u.id);
    setXP(u.xp);
    setRole(u.role);
  };

  const save = async () => {
    await supabase.from('profiles').update({ xp, role }).eq('id', selected);
    alert('Updated.');
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-black text-noxo-primary border border-noxo-accent rounded">
      <h1 className="text-xl font-bold mb-4">🛠️ Admin Console</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="border-r pr-4 max-h-[400px] overflow-y-scroll">
          <h2 className="text-sm font-bold mb-2">Users</h2>
          <ul className="text-xs space-y-1">
            {users.map(u => (
              <li key={u.id} className="cursor-pointer hover:text-noxo-accent" onClick={() => selectUser(u)}>
                {u.display_name || 'Unnamed'} — {u.role}, {u.xp} XP
              </li>
            ))}
          </ul>
        </div>
        <div>
          {selected && (
            <div className="space-y-3">
              <h2 className="text-sm font-bold mb-2">Edit User</h2>
              <label className="block text-xs">XP</label>
              <input value={xp} onChange={e => setXP(+e.target.value)} className="w-full p-2 rounded bg-[#111] border border-noxo-accent text-sm" />
              <label className="block text-xs mt-2">Role</label>
              <input value={role} onChange={e => setRole(e.target.value)} className="w-full p-2 rounded bg-[#111] border border-noxo-accent text-sm" />
              <button onClick={save} className="mt-4 bg-noxo-accent text-black px-4 py-2 rounded text-sm">💾 Save</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
