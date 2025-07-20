
import React from 'react';

function VaultEventBanner({ event }) {
  if (!event) return null;

  return (
    <div className="bg-gradient-to-r from-purple-800 to-fuchsia-600 text-white p-3 rounded-xl text-center shadow-lg animate-pulse">
      🔔 Vault Event Active: <strong>{event}</strong>
    </div>
  );
}

export default VaultEventBanner;
