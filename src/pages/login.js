
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../supabaseClient';
import { ThemeSupa } from '@supabase/auth-ui-shared';

export default function Login() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div className="max-w-md w-full p-4 bg-[#121212] rounded-lg">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
          theme="dark"
        />
      </div>
    </div>
  );
}
