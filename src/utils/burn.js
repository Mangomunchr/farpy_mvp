
export function getBurns() {
  const burns = localStorage.getItem('burn_log');
  return burns ? JSON.parse(burns) : [];
}

export function addBurn(entry) {
  const burns = getBurns();
  const updated = [entry, ...burns].slice(0, 15);
  localStorage.setItem('burn_log', JSON.stringify(updated));
}
