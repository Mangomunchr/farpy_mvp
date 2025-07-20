import { useState } from 'react';

export default function BonusRitualsPanel() {
  const [ritual, setRitual] = useState(null);

  const startRitual = (type) => {
    setRitual(type);
    setTimeout(() => setRitual(null), 4000);
  };

  return (
    <div className="border p-4 rounded-xl shadow bg-pink-100">
      <h2 className="text-xl font-bold mb-2">🎉 Bonus Rituals</h2>
      <button onClick={() => startRitual("mirror")}>Activate Mirror Mango</button>
      <button onClick={() => startRitual("storm")} className="ml-2">Trigger Storm Spike</button>
      {ritual && <p className="mt-2">✨ {ritual} ritual triggered!</p>}
    </div>
  );
}
