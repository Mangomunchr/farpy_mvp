
export function getVaultWeatherFX(status) {
  if (status === 'Mango Monsoon') return '🌧️ Mango Monsoon';
  if (status === 'Heatwave') return '🔥 Mango Heatwave';
  return '⛅ Normal Conditions';
}
