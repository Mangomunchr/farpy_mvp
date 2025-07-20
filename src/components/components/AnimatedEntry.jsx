
import React from 'react';

function AnimatedEntry({ children }) {
  return (
    <div className="animate-fade-in-up opacity-0 animate-delay-100 animate-fill-forwards">
      {children}
    </div>
  );
}

export default AnimatedEntry;
