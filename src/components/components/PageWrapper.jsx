
import React from 'react';

function PageWrapper({ children }) {
  return (
    <div className="min-h-screen bg-black text-white font-sans">{children}</div>
  );
}

export default PageWrapper;
