
import React from 'react';

function RoleAuraDisplay({ role }) {
  const roleColors = {
    "Rendar": "text-blue-400 border-blue-600",
    "NodeMonk": "text-green-400 border-green-600",
    "Chaosborne": "text-red-400 border-red-600",
    "Vaultling": "text-purple-400 border-purple-600",
  };

  const className = roleColors[role] || "text-zinc-400 border-zinc-600";

  return (
    <div className={`border p-2 rounded-xl text-sm text-center ${className}`}>
      🧿 Current Role: <strong>{role}</strong>
    </div>
  );
}

export default RoleAuraDisplay;
