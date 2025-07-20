
import React from 'react';

function InfoCallout({ message }) {
  return (
    <div className="bg-indigo-900 border-l-4 border-indigo-500 p-3 rounded text-indigo-200 text-sm">
      {message}
    </div>
  );
}

export default InfoCallout;
