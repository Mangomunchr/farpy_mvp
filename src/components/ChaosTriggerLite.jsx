
import React from 'react';
import { addBurn } from '../utils/burn';

function ChaosTriggerLite() {
  const handleBurn = () => {
    const entry = {
      msg: 'Chaos Activated',
      amount: 420
    };
    addBurn(entry);
    alert('CHAOS UNLEASHED ⚡ +420 XP');
  };

  return (
    <button
      onClick={handleBurn}
      className="w-full py-3 bg-red-700 hover:bg-red-800 text-white font-bold rounded-xl"
    >
      🔥 UNLEASH CHAOS
    </button>
  );
}

export default ChaosTriggerLite;
