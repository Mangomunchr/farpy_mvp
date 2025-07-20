import { useState, useEffect } from 'react';

export default function AfterburnStatus() {
  const [active, setActive] = useState(true); // Simulated on
  const [penalty] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => setActive(false), 60000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="border p-4 rounded-xl shadow bg-red-200">
      <h2 className="text-xl font-bold mb-2">🔥 Afterburn</h2>
      {active ? (
        <p>In Afterburn State: -{penalty} XP Penalty Active</p>
      ) : (
        <p>✅ Cleansed. No Penalty Active.</p>
      )}
    </div>
  );
}
