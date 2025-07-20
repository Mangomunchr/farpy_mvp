const sigils = [
  "Sigil of Bloom",
  "Sigil of Flame",
  "Sigil of Drift",
  "Sigil of Vault",
  "Sigil of Memory",
];

let idx = 0;

export function startSigilCycle(setSigil) {
  return setInterval(() => {
    idx = (idx + 1) % sigils.length;
    setSigil(sigils[idx]);
  }, 10000);
}
