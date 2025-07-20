
import { useState, useEffect } from 'react';

const QUESTS = [
  { id: 'q1', text: '🔥 Burn at least once today' },
  { id: 'q2', text: '🎁 Claim from the Vault' },
  { id: 'q3', text: '📜 Read a patch note' },
  { id: 'q4', text: '🧾 View your Ritual Timeline' },
  { id: 'q5', text: '💬 Invite a new user to join' }
];

export default function XPQuestboard() {
  const [completed, setCompleted] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem('xp_quests');
    if (stored) setCompleted(JSON.parse(stored));
  }, []);

  const toggleQuest = (id) => {
    const updated = { ...completed, [id]: !completed[id] };
    setCompleted(updated);
    localStorage.setItem('xp_quests', JSON.stringify(updated));
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 border border-noxo-accent rounded bg-black text-noxo-primary">
      <h1 className="text-xl font-bold mb-4">🎯 Daily XP Questboard</h1>
      <ul className="space-y-3">
        {QUESTS.map(q => (
          <li key={q.id} className="flex items-center justify-between">
            <span className={\`\${completed[q.id] ? 'line-through opacity-50' : ''}\`}>{q.text}</span>
            <input
              type="checkbox"
              checked={!!completed[q.id]}
              onChange={() => toggleQuest(q.id)}
              className="accent-noxo-accent"
            />
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs opacity-50">Your quest progress is saved locally and resets each day.</p>
    </div>
  );
}
