import React from 'react';

const VaultStabilityMeter = ({ level }) => (
  <div className="text-xs text-cyan-300">
    🧿 Vault Stability: {level}%
  </div>
);

export default VaultStabilityMeter;
