import { useState } from 'react';

export default function ChompyFanControl() {
  const [fanSpeed, setFanSpeed] = useState("Auto");

  const modes = ["Silent", "Balanced", "Max Cooling", "Auto"];
  const next = () => {
    const idx = (modes.indexOf(fanSpeed) + 1) % modes.length;
    setFanSpeed(modes[idx]);
  };

  return (
    <div className="border p-4 rounded-xl shadow bg-neutral-200">
      <h2 className="text-xl font-bold mb-2">🌀 Chompy Fan Control</h2>
      <p>Mode: {fanSpeed}</p>
      <button onClick={next} className="mt-2 bg-black text-white px-3 py-1 rounded">
        Cycle Fan Mode
      </button>
    </div>
  );
}
