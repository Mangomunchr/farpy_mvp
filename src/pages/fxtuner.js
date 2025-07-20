
import { useState, useEffect } from 'react';

const MODES = [
  { id: 'safe', label: '🧘 Safe Mode', desc: 'Minimal FX. Rituals run quietly.' },
  { id: 'chaos', label: '🔥 Chaos Hot', desc: 'Max FX. Bright, loud, energized.' },
  { id: 'silent', label: '🔇 Silent Monk', desc: 'No visual FX. For focused sessions.' },
  { id: 'auto', label: '⚙️ Auto Ritual', desc: 'Let the system pick based on vault state.' }
];

export default function RitualFXTuner() {
  const [selected, setSelected] = useState('auto');

  useEffect(() => {
    const stored = localStorage.getItem('ritual_fx_mode');
    if (stored) setSelected(stored);
  }, []);

  const update = (id) => {
    setSelected(id);
    localStorage.setItem('ritual_fx_mode', id);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 border border-noxo-accent rounded bg-black text-noxo-primary">
      <h1 className="text-xl font-bold mb-4">🎨 Ritual FX Tuner</h1>
      <ul className="space-y-4">
        {MODES.map(({ id, label, desc }) => (
          <li key={id} className="border border-noxo-accent p-3 rounded cursor-pointer hover:bg-noxo-accent/10" onClick={() => update(id)}>
            <div className="flex justify-between items-center">
              <span className="font-bold">{label}</span>
              {selected === id && <span className="text-noxo-accent text-sm">✔️</span>}
            </div>
            <p className="text-xs mt-1 text-noxo-primary/80">{desc}</p>
          </li>
        ))}
      </ul>
      <p className="text-xs text-noxo-accent mt-4">FX mode preference is saved locally.</p>
    </div>
  );
}
