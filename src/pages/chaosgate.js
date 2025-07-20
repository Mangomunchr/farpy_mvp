
import { useState } from 'react';
import ChaosFX from '../components/ChaosFX';

export default function ChaosGate() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-noxo-primary flex flex-col items-center justify-center text-center p-8">
      <ChaosFX active={unlocked} />
      <div className="max-w-md space-y-4 z-10">
        <h1 className="text-3xl font-bold">🔒 Chaos Gate</h1>
        <p className="text-sm opacity-80">
          This gate is sealed by the Vault. Only when the Mango Ritual reaches full strength will it awaken.
        </p>
        {!unlocked ? (
          <button
            className="bg-red-600 hover:bg-red-500 px-4 py-2 text-sm text-white rounded mt-4 animate-pulse"
            onClick={() => setUnlocked(true)}
          >
            Attempt to Awaken
          </button>
        ) : (
          <p className="text-red-400 text-lg mt-4 font-bold">🧨 CHAOS IS AWAKENED</p>
        )}
      </div>
    </div>
  );
}
