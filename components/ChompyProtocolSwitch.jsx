import { useState } from 'react';

export default function ChompyProtocolSwitch() {
  const [mode, setMode] = useState("Safe Mode");

  const modes = ["Safe Mode", "Chaos Hot", "Silent Monk", "Auto Ritual"];

  const nextMode = () => {
    const idx = (modes.indexOf(mode) + 1) % modes.length;
    setMode(modes[idx]);
  };

  return (
    <div className="border p-4 rounded-xl shadow bg-gray-100">
      <h2 className="text-xl font-bold mb-2">🧠 Chompy Protocol</h2>
      <p>Current GPU Mode: {mode}</p>
      <button onClick={nextMode} className="mt-2 bg-gray-800 text-white px-4 py-1 rounded">
        Switch Mode
      </button>
    </div>
  );
}
