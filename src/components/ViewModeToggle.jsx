import { useState } from 'react';

export default function ViewModeToggle() {
  const [mode, setMode] = useState("Operator");

  return (
    <div className="text-xs text-zinc-400 italic text-right pr-2">
      Mode:{" "}
      <select
        className="bg-black text-white border border-zinc-700 px-1 py-0.5 rounded text-xs"
        value={mode}
        onChange={e => setMode(e.target.value)}
      >
        <option>Operator</option>
        <option>NodeMonk</option>
        <option>Renderling</option>
      </select>
    </div>
  );
}
