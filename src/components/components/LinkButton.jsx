
import React from 'react';
import { Link } from 'react-router-dom';

function LinkButton({ to, label }) {
  return (
    <Link
      to={to}
      className="px-4 py-2 rounded-lg text-white font-semibold bg-blue-600 hover:bg-blue-700"
    >
      {label}
    </Link>
  );
}

export default LinkButton;
