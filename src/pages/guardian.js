
import { useState } from 'react';

const QUESTIONS = [
  {
    q: 'What must you do before claiming from the Vault?',
    a: ['Burn Mango first', 'Check patch notes', 'Awaken chaos'],
    c: 0
  },
  {
    q: 'Who starts as a Rendar?',
    a: ['Only NodeMonks', 'All users', 'Those with 1000 XP'],
    c: 1
  },
  {
    q: 'What is the Vault influenced by?',
    a: ['XP', 'Weather + Rituals', 'Admin keys'],
    c: 1
  }
];

export default function VaultGuardianTrial() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const choose = (i) => {
    if (i === QUESTIONS[step].c) setScore(score + 1);
    if (step + 1 < QUESTIONS.length) setStep(step + 1);
    else setDone(true);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 border border-noxo-accent rounded bg-black text-noxo-primary">
      <h1 className="text-xl font-bold mb-4">🛡️ Vault Guardian Trial</h1>
      {!done ? (
        <>
          <p className="text-sm mb-4">{QUESTIONS[step].q}</p>
          <ul className="space-y-2">
            {QUESTIONS[step].a.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => choose(i)}
                  className="w-full bg-[#111] border border-noxo-accent px-3 py-2 rounded text-sm hover:bg-noxo-accent/10"
                >
                  {opt}
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="text-center mt-4">
          <p className="text-lg mb-2">🧠 Score: {score} / {QUESTIONS.length}</p>
          {score === QUESTIONS.length ? (
            <p className="text-green-400 font-bold">✅ Trial Passed. You are worthy.</p>
          ) : (
            <p className="text-red-400">❌ Trial Failed. Study the lore.</p>
          )}
        </div>
      )}
    </div>
  );
}
