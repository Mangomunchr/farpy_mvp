
import React from 'react';

function InlineButton({ label, onClick }) {
  return (
    <button onClick={onClick} className="text-blue-400 hover:underline text-sm">
      {label}
    </button>
  );
}

export default InlineButton;
