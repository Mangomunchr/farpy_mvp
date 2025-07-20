
import { useState } from 'react';

export default function DuelArena() {
  const [opponent, setOpponent] = useState('');
  const [duelResult, setDuelResult] = useState(null);

  const fakeDuel = () => {
    if (!opponent) return;
    const win = Math.random() > 0.5;
    setDuelResult(win ? 'Victory 🔥' : 'Defeat ❄️');
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 border border-noxo-accent rounded bg-black text-noxo-primary text-center">
      <h1 className="text-2xl font-bold mb-4">⚔️ Ritual Duel Arena</h1>
      <p className="text-sm mb-4 text-noxo-accent">Challenge another user to a ritual duel. This is symbolic only — for now.</p>

      <input
        type="text"
        placeholder="Opponent username or ID"
        value={opponent}
        onChange={e => setOpponent(e.target.value)}
        className="w-full mb-4 p-2 rounded bg-[#111] border border-noxo-accent text-sm"
      />

      <button
        onClick={fakeDuel}
        className="bg-noxo-accent text-black px-4 py-2 rounded text-sm"
      >
        Initiate Duel
      </button>

      {duelResult && (
        <div className="mt-6 text-xl font-bold animate-pulse text-noxo-accent">
          {duelResult}
        </div>
      )}
    </div>
  );
}
