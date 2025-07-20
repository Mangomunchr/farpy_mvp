
export const vaultWeatherIcons = {
  'Mango Monsoon': '🌧️',
  'Heatwave': '🔥',
  'Vault Eclipse': '🌑',
  'Default': '⛅'
};

export function getVaultIcon(status) {
  return vaultWeatherIcons[status] || vaultWeatherIcons['Default'];
}
