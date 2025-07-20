
import React from 'react';

function NodeLineageMarker({ generation, founderTag }) {
  return (
    <div className="text-xs text-zinc-400 text-center border border-zinc-700 p-2 rounded-xl bg-black">
      🌱 Lineage Gen: {generation} <br />
      {founderTag && <span className="text-yellow-300">🔸 Founder Mark: {founderTag}</span>}
    </div>
  );
}

export default NodeLineageMarker;
