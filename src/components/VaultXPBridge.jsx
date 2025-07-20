
import React from 'react';

function VaultXPBridge({ from, to, value }) {
  return (
    <div className="text-xs text-zinc-400 text-center italic">
      Transferred <span className="text-green-400 font-bold">{value} XP</span> from {from} → {to}
    </div>
  );
}

export default VaultXPBridge;
