
import React from 'react';

function ChaosStatusPanel({ status, cooldown, charge }) {
  return (
    <div className="bg-red-900 border border-red-500 p-4 rounded-xl text-red-100 text-sm">
      <div className="font-bold text-lg mb-2">☣ Chaos Status</div>
      <div>Status: <span className="font-semibold">{status}</span></div>
      <div>Cooldown: {cooldown} sec</div>
      <div>Charge Level: {charge}%</div>
    </div>
  );
}

export default ChaosStatusPanel;
