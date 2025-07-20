
import React from 'react';

function ActionRow({ left, right }) {
  return (
    <div className="flex justify-between items-center">{left}{right}</div>
  );
}

export default ActionRow;
