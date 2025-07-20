
import React from 'react';

function VaultOverflowAlert({ isOverflowing }) {
  if (!isOverflowing) return null;

  return (
    <div className="bg-yellow-800 text-yellow-200 border border-yellow-400 p-3 rounded-xl text-sm text-center animate-pulse">
      ⚠️ Vault Overflow Detected — Redistribution Required.
    </div>
  );
}

export default VaultOverflowAlert;
