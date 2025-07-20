import { useState } from 'react';

export default function OperatorConsole() {
  const [override, setOverride] = useState(false);

  return (
    <div className="border p-4 rounded-xl shadow bg-zinc-300">
      <h2 className="text-xl font-bold mb-2">🛠️ Operator Console</h2>
      <p>Status: {override ? "🔓 Vault Override Active" : "🔒 Standard Protocol"}</p>
      <button onClick={() => setOverride(!override)} className="mt-2 bg-black text-white px-4 py-1 rounded">
        Toggle Override
      </button>
    </div>
  );
}
