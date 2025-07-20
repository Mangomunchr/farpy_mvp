
import React from 'react';

function WarningNote({ text }) {
  return (
    <div className="text-xs bg-yellow-900 text-yellow-300 p-2 rounded border border-yellow-600">
      ⚠ {text}
    </div>
  );
}

export default WarningNote;
