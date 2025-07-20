
import React, { useState } from 'react';
import ChaosTriggerButton from '../components/ChaosTriggerButton';
import VaultPulse from '../components/VaultPulse';
import BurnHistoryLog from '../components/BurnHistoryLog';
import ChaosStatusPanel from '../components/ChaosStatusPanel';
import SubmitSuccessToast from '../components/SubmitSuccessToast';

function Vault() {
  const [toastVisible, setToastVisible] = useState(false);

  return (
    <div className="p-6 space-y-4">
      <ChaosTriggerButton />
      <VaultPulse />
      <ChaosStatusPanel status="Dormant" cooldown={15} charge={24} />
      <BurnHistoryLog />
      <SubmitSuccessToast show={toastVisible} />
    </div>
  );
}

export default Vault;
