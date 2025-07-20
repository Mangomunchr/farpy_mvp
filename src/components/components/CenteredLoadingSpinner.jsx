
import React from 'react';

function CenteredLoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[200px] text-white">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
    </div>
  );
}

export default CenteredLoadingSpinner;
