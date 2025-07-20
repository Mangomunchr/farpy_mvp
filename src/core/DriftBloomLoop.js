let driftTick = 0;
let chaosLevel = 0.1;

export function startDriftBloom(setVaultState) {
  return setInterval(() => {
    driftTick++;
    chaosLevel += (Math.random() - 0.5) * 0.05;
    chaosLevel = Math.max(0, Math.min(1, chaosLevel));
    setVaultState(prev => ({
      ...prev,
      chaosLevel: chaosLevel.toFixed(3),
      driftTick,
    }));
  }, 7000);
}
