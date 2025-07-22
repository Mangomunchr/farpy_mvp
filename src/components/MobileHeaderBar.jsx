
import React from 'react';

function MobileHeaderBar({ title }) {
  return (
    <div className="md:hidden bg-zinc-950 text-white text-center py-3 border-b border-zinc-700">
      {title}
    </div>
  );
}

export default MobileHeaderBar;
