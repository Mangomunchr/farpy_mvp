import React from 'react';

export default function PatchNoteTicker({ notes = [] }) {
  return (
    <div className="bg-black text-noxo-primary border-t border-noxo-accent py-2 text-sm font-mono overflow-hidden whitespace-nowrap animate-marquee">
      {notes.length > 0 ? notes.join(' ⚡ ') : '🛠️ Patch notes loading...'}
    </div>
  );
}
