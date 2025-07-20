import React from 'react';

const CleanUpUtility = () => {
  const clearAll = () => {
    localStorage.clear();
    alert('Local memory cleansed.');
  };

  return (
    <button onClick={clearAll} className="text-xs text-yellow-400 hover:underline">
      Clear Local Vault + XP
    </button>
  );
};

export default CleanUpUtility;
