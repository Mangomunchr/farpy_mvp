import React from 'react';

const VaultGlowPulse = ({ amount }) => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-green-500 text-black px-6 py-2 rounded-full font-bold animate-ping-fast">
        +${amount.toFixed(2)} to Vault
      </div>
    </div>
  );
};

export default VaultGlowPulse;
