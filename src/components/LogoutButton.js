
import { supabase } from '../supabaseClient';

export default function LogoutButton() {
  return (
    <button
      onClick={() => supabase.auth.signOut()}
      className="text-sm text-noxo-accent hover:underline"
    >
      Log Out
    </button>
  );
}
