let burn = 0;

export function startBurnSync(setBurnState) {
  return setInterval(() => {
    burn += Math.random() * 0.2;
    setBurnState(Math.min(100, burn.toFixed(1)));
  }, 9000);
}
