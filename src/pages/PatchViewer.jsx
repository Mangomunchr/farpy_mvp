import React from 'react';

const patches = [
  { version: "1.0", message: "Initial deployment with Vault + Dashboard" },
  { version: "1.1", message: "Mango FX and NodeMonk classes live" },
  { version: "1.2", message: "XP tracking and invite system connected" }
];

const PatchViewer = () => (
  <div className="p-4 text-sm text-noxo-primary">
    <h1 className="text-xl font-bold">📝 Patchnotes</h1>
    {patches.map((p, i) => (
      <div key={i} className="border border-noxo-accent p-2 rounded mt-2">
        <strong>v{p.version}</strong>
        <p>{p.message}</p>
      </div>
    ))}
  </div>
);

export default PatchViewer;
