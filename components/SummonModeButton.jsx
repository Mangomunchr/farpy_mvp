import { useState } from 'react';

export default function SummonModeButton() {
  const [xp] = useState(520); // Simulate current XP
  const [credits, setCredits] = useState(4);
  const requiredXP = 250;
  const requiredCredits = 3;

  const summonUnlocked = xp >= requiredXP && credits >= requiredCredits;

  const activateSummon = () => {
    if (summonUnlocked) {
      setCredits(prev => prev - requiredCredits);
      alert("🔥 Summon Mode Activated!");
    } else {
      alert("🔒 Not enough XP or credits to activate Summon Mode.");
    }
  };

  return (
    <div className="border p-4 rounded-xl shadow bg-purple-100">
      <h2 className="text-xl font-bold mb-2">🔥 Summon Mode</h2>
      <p>XP: {xp} | Credits: {credits}</p>
      <p>Requires: {requiredXP} XP & {requiredCredits} Credits</p>
      <button
        onClick={activateSummon}
        className={\`mt-2 px-4 py-2 rounded \${summonUnlocked ? "bg-purple-600 text-white" : "bg-gray-300 text-gray-600"}\`}
      >
        {summonUnlocked ? "Activate Summon Mode" : "Locked"}
      </button>
    </div>
  );
}
