import { useState, useEffect } from 'react';
import { startDriftBloom } from '../core/DriftBloomLoop';
import { startSigilCycle } from '../core/SigilRotationEngine';
import { startBurnSync } from '../core/BurnSyncDaemon';
import { triggerOverride } from '../core/VaultEchoTrigger';

export default function VaultOverrideTerminal() {
  const [vaultState, setVaultState] = useState({ chaosLevel: 0.1, driftTick: 0 });
  const [sigil, setSigil] = useState("Sigil of Bloom");
  const [burn, setBurn] = useState(0);
  const [echoLog, setEchoLog] = useState([]);

  useEffect(() => {
    const loops = [
      startDriftBloom(setVaultState),
      startSigilCycle(setSigil),
      startBurnSync(setBurn),
    ];
    return () => loops.forEach(clearInterval);
  }, []);

  return (
    <div className="p-4 border rounded bg-black text-green-400 font-mono">
      <h2 className="text-xl font-bold mb-2">🧿 Override Terminal</h2>
      <p>Chaos: {vaultState.chaosLevel}</p>
      <p>Drift Tick: {vaultState.driftTick}</p>
      <p>Sigil: {sigil}</p>
      <p>Burn: {burn}%</p>
      <button onClick={() => triggerOverride(setEchoLog)} className="mt-2 px-3 py-1 bg-green-700 rounded">
        Trigger Override
      </button>
      <ul className="mt-2 text-sm space-y-1">
        {echoLog.map((log, i) => <li key={i}>• {log}</li>)}
      </ul>
    </div>
  );
}
