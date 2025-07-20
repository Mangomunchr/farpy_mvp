
import React from 'react';

function PanelWarning({ message }) {
  return (
    <div className="bg-yellow-800 border border-yellow-500 text-yellow-200 p-3 rounded-lg text-sm text-center">
      ⚠️ {message}
    </div>
  );
}

export default PanelWarning;
