
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function JoinVault() {
  const router = useRouter();
  const [ref, setRef] = useState('');

  useEffect(() => {
    if (router.query.ref) {
      setRef(router.query.ref.toUpperCase());
    }
  }, [router.query]);

  const begin = () => {
    router.push('/signup'); // assume future signup flow
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center text-noxo-primary px-4">
      <div className="max-w-lg space-y-6">
        <h1 className="text-3xl font-bold">🍋 Join the Vault</h1>
        <p className="text-sm opacity-70">
          Claim your node. Burn with purpose. Awaken your role within the Ritual Engine.
        </p>

        {ref && (
          <p className="text-xs text-noxo-accent border border-noxo-accent px-3 py-1 inline-block rounded font-mono">
            Invite Code: {ref}
          </p>
        )}

        <button
          onClick={begin}
          className="mt-6 bg-noxo-accent text-black px-6 py-2 rounded text-sm"
        >
          Begin Your Ritual
        </button>
      </div>
    </div>
  );
}
