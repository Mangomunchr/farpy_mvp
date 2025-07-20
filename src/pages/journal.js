
import { useState } from 'react';

export default function VaultJournal() {
  const [text, setText] = useState('');
  const [saved, setSaved] = useState(false);

  const save = () => {
    localStorage.setItem('vault_journal', text);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const load = () => {
    const savedText = localStorage.getItem('vault_journal');
    if (savedText) setText(savedText);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto text-noxo-primary">
      <h1 className="text-xl font-bold mb-4">📝 Vault Journal</h1>
      <p className="text-sm mb-2">Write your reflections, chaos thoughts, or ritual logs here. This saves locally.</p>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Begin your ritual entry..."
        className="w-full h-64 p-4 bg-black border border-noxo-accent rounded resize-none text-sm"
      />
      <div className="mt-3 flex gap-2">
        <button onClick={save} className="bg-noxo-accent text-black px-4 py-1 rounded text-sm">Save</button>
        <button onClick={load} className="border border-noxo-accent text-noxo-accent px-4 py-1 rounded text-sm">Load</button>
        {saved && <span className="text-green-400 text-xs italic mt-1">Saved.</span>}
      </div>
    </div>
  );
}
