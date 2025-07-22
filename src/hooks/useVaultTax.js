// Hook placeholder to calculate ritual tax on Summon boosts
export default function useVaultTax(coolbeans) {
  const ritualTax = 0.15;
  return coolbeans * ritualTax;
}
