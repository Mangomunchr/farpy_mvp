import { useState } from 'react';

export default function BurnTrailCollapse() {
  const [info] = useState("Final trail decayed at Vault Layer 12");

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">🩻 Burn Collapse</h2>
      <p>{info}</p>
    </div>
  );
}
