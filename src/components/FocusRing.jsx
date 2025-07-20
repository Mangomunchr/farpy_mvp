
import React from 'react';

function FocusRing({ children }) {
  return (
    <div className="outline outline-1 outline-blue-500 focus-within:outline-2 rounded-xl p-2">
      {children}
    </div>
  );
}

export default FocusRing;
