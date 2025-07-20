
export function getCharge() {
  return parseInt(localStorage.getItem('vault_charge') || '0');
}

export function addCharge(amount) {
  const newCharge = getCharge() + amount;
  localStorage.setItem('vault_charge', newCharge);
  return newCharge;
}
