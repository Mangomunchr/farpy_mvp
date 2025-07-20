
import React from 'react';

function VaultGlitchWarning({ isActive }) {
  if (!isActive) return null;

  return (
    <div className="p-4 bg-black border border-pink-700 text-pink-400 text-sm font-mono rounded-xl animate-pulse">
      ⚠️ Vault Instability Detected: Glitch anomaly active. Ritual reroute in effect.
    </div>
  );
}

export default VaultGlitchWarning;
