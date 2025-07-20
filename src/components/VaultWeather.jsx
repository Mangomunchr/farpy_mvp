import React from 'react';

const VaultWeather = ({ aura }) => {
  const moods = {
    calm: "🌤️ Calm Grid",
    storm: "⛈️ Mango Storm",
    burn: "🔥 Ritual Surge",
  };
  return (
    <div className="text-sm text-center text-yellow-400 mb-2">
      Vault Weather: {moods[aura] || "🕸️ Unknown"}
    </div>
  );
};

export default VaultWeather;
