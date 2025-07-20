
import React from 'react';

function EmptyStateMessage({ message }) {
  return (
    <div className="text-center text-zinc-400 italic py-6">
      {message}
    </div>
  );
}

export default EmptyStateMessage;
