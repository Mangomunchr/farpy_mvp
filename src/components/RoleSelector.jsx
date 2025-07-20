
import React from 'react';
import { setRole } from '../utils/roles';

function RoleSelector() {
  return (
    <div className="flex gap-4 justify-center p-4">
      <button
        onClick={() => setRole('rendar')}
        className="px-4 py-2 bg-blue-700 text-white rounded-lg"
      >
        I am Rendar
      </button>
      <button
        onClick={() => setRole('nodemonk')}
        className="px-4 py-2 bg-green-700 text-white rounded-lg"
      >
        I am NodeMonk
      </button>
    </div>
  );
}

export default RoleSelector;
