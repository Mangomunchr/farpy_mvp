import { useState } from 'react';

export default function VaultMutationTrigger() {
  const [mutation] = useState("⚠️ Mutation unstable: pending override");

  return (
    <div className="border p-4 rounded-xl shadow bg-amber-100">
      <h2 className="text-xl font-bold mb-2">🧬 Vault Mutation</h2>
      <p>{mutation}</p>
    </div>
  );
}
