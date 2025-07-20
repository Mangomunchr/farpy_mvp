
import React, { useState } from 'react';

function ChaosTriggerButton() {
  const [triggered, setTriggered] = useState(false);

  const handleClick = () => {
    setTriggered(true);
    setTimeout(() => setTriggered(false), 5000);
  };

  return (
    <div className="text-center">
      <button
        onClick={handleClick}
        className={`px-6 py-3 rounded-full font-bold text-white shadow-xl transition-all duration-300 ${
          triggered ? 'bg-red-700' : 'bg-red-500 hover:bg-red-600'
        }`}
      >
        ☣️ Chaos Button
      </button>
      {triggered && <p className="mt-2 text-red-300">CHAOS MODE TRIGGERED</p>}
    </div>
  );
}

export default ChaosTriggerButton;
