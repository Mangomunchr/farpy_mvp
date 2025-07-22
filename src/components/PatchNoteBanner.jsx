import React from 'react';

const PatchNoteBanner = ({ message }) => (
  <div className="bg-black text-yellow-300 text-xs p-2 border-b border-yellow-500 text-center">
    🛠️ PATCH: {message}
  </div>
);

export default PatchNoteBanner;
