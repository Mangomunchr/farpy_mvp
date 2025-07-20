
export function getXP() {
  return parseInt(localStorage.getItem('xp') || '0');
}

export function addXP(amount) {
  const current = getXP();
  const next = current + amount;
  localStorage.setItem('xp', next);
  return next;
}
