
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    title: '🍋 Welcome to the Vault',
    message: 'The Vault holds all Mango energy burned by users. You can claim Mango if you participate in rituals.'
  },
  {
    title: '🔥 Burning',
    message: 'Burning adds to the Vault. It’s how you contribute to the shared power. You earn XP and influence by burning.'
  },
  {
    title: '🎁 Claiming',
    message: 'Claiming lets you take from the Vault. But beware: the Vault favors those who give more than they take.'
  },
  {
    title: '🏆 XP and Role',
    message: 'XP reflects your ritual discipline. As you level up, you unlock new privileges. Everyone starts as a Rendar.'
  }
];

export default function TeachMode() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else navigate('/home');
  };

  return (
    <div className="min-h-screen bg-black text-noxo-primary flex flex-col justify-center items-center p-8">
      <div className="max-w-md w-full bg-[#121212] border border-noxo-accent rounded-lg p-6 shadow text-center">
        <h2 className="text-xl font-bold mb-4">{steps[step].title}</h2>
        <p className="mb-6 text-sm">{steps[step].message}</p>
        <button
          className="bg-noxo-accent text-black px-4 py-2 rounded hover:bg-noxo-accent/80"
          onClick={next}
        >
          {step === steps.length - 1 ? 'Enter the Vault' : 'Next'}
        </button>
      </div>
    </div>
  );
}
