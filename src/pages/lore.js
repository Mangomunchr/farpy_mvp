
import { useState } from 'react';

const MESSAGES = [
  '🍋 "He who burns without fear may one day claim without guilt."',
  '🌑 "When the Vault sleeps, the brave ignite it."',
  '🌀 "A true Rendar never skips the ritual twice."',
  '🔒 "Mango locked is not Mango lost — only paused."',
  '🔥 "All power given to the Vault returns tenfold... eventually."',
  '🧘 "NodeMonks do not hoard. They harmonize."',
  '📜 "The chaos comes when order grows lazy."',
  '💀 "Burn. Fall. Rise again. This is the way."'
];

export default function LoreGenerator() {
  const [line, setLine] = useState(() =>
    MESSAGES[Math.floor(Math.random() * MESSAGES.length)]
  );

  const next = () => {
    const fresh = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    setLine(fresh);
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 border border-noxo-accent rounded bg-black text-noxo-primary text-center">
      <h1 className="text-xl font-bold mb-4">🔮 Vault Lore Generator</h1>
      <p className="text-lg italic text-noxo-accent mb-4">{line}</p>
      <button
        onClick={next}
        className="bg-noxo-accent text-black px-4 py-2 text-sm rounded"
      >
        Another Prophecy
      </button>
    </div>
  );
}
