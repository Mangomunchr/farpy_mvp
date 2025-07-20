
export function getXPWithMultiplier(baseXP, streak) {
  let bonus = 1;
  if (streak >= 7) bonus = 1.5;
  else if (streak >= 3) bonus = 1.2;
  return Math.round(baseXP * bonus);
}
