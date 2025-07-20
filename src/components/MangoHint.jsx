
import React from 'react';

function MangoHint({ message }) {
  return (
    <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-black p-3 rounded-xl text-center text-xs font-bold shadow-lg">
      🥭 Mango Hint: {message}
    </div>
  );
}

export default MangoHint;
