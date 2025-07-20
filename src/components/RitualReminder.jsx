import { useEffect, useState } from 'react';

export default function RitualReminder() {
  const [reminder, setReminder] = useState("");

  useEffect(() => {
    const r = setInterval(() => {
      const messages = ["✨ Bless the Vault", "🔥 Complete a Summon", "🧘 Cool your Node"];
      setReminder(messages[Math.floor(Math.random() * messages.length)]);
    }, 12000);
    return () => clearInterval(r);
  }, []);

  return (
    <div className="border p-4 rounded-xl shadow bg-pink-50">
      <h2 className="text-xl font-bold mb-2">🧭 Ritual Reminder</h2>
      <p>{reminder}</p>
    </div>
  );
}
