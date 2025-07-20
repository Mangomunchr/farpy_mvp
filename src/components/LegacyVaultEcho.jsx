import { useEffect, useState } from 'react';

export default function LegacyVaultEcho() {
  const [echo, setEcho] = useState("⏳ Listening...");

  useEffect(() => {
    const interval = setInterval(() => {
      const messages = [
        "💎 Echo from Rendar Prime",
        "📦 Vault fragment detected",
        "🛑 Obstructed echo loop"
      ];
      setEcho(messages[Math.floor(Math.random() * messages.length)]);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border p-4 rounded-xl shadow bg-neutral-100">
      <h2 className="text-xl font-bold mb-2">🔊 Legacy Vault Echo</h2>
      <p>{echo}</p>
    </div>
  );
}
