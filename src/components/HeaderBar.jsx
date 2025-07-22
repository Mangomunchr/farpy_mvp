import React from 'react';

export default function HeaderBar() {
  return (
    <header className="w-full bg-noxo-dark p-4 border-b border-noxo-accent flex justify-between items-center">
      <h1 className="text-lg font-bold text-noxo-primary">🧠 Farpy Grid Console</h1>
      <button className="bg-noxo-primary text-black px-4 py-2 rounded-lg font-bold">Logout</button>
    </header>
  );
}
